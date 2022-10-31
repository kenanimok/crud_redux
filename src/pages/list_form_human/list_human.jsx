import React, { useEffect, useRef } from "react";
import Corelayout from "../../components/layout/corelayout/corelayout";
import styled from "styled-components";
import { Space, Table, Tag, Dropdown, Menu, Button } from "antd";
import { DownOutlined } from "@ant-design/icons";
import * as listAction from "../../action/listhuman.action";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { DownloadExcel } from "react-excel-export";
import { useReactToPrint } from "react-to-print";
import { renderToString } from "react-dom/server";
import jsPDF from "jspdf";
import Report from "../../components/Report/report";
import font from "../../assets/fonts/font_report/RSU_Regular.ttf";

export default function List_human() {
  const humanlistReducer = useSelector((state) => state.listhumanReducer);
  const navigate = useNavigate();
  const ref = useRef();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listAction.getDataList());
  }, []);

  const columns = [
    {
      title: "id",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "avatar",
      dataIndex: "avatar",
      key: "avatar",
      render: (avatar) => <img src={`${avatar}`} style={{ height: "80px" }} />,
    },
    {
      title: "fname",
      dataIndex: "fname",
      key: "fname",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "lname",
      dataIndex: "lname",
      key: "lname",
    },
    {
      title: "username",
      dataIndex: "username",
      key: "username",
    },
    {
      title: "action",
      key: "action",
      render: (_, record) => (
        <Dropdown
          overlay={() => (
            <Menu
              items={[
                {
                  key: "1",
                  label: (
                    <p
                      onClick={() => {
                        navigate("/edit/" + record.id);
                      }}
                    >
                      edit
                    </p>
                  ),
                },
                {
                  key: "2",
                  label: <p onClick={() => deleteHuman(record)}>deletee</p>,
                },
              ]}
            />
          )}
        >
          <a onClick={(e) => e.preventDefault()}>
            <DownOutlined />
          </a>
        </Dropdown>
      ),
    },
  ];

  const deleteHuman = async (record) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      id: record.id,
    });

    var requestOptions = {
      method: "DELETE",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    const Fetch = async () => {
      await fetch("https://www.mecallapi.com/api/users/delete", requestOptions)
        .then((response) => response.json())
        .then((result) => {
          alert(result["message"]);
          if (result["status"] === "ok") {
            alert("yeyey");
          }
        })
        .catch((error) => console.log("error", error));
    };

    Fetch();
  };

  const onDownload = async () => {
    const string = renderToString(<Report ref={ref} />);
    let pdf = new jsPDF("l", "pt", "a4");
    await pdf.addFont(font, "Prompt", "normal");
    await pdf.setFont("Prompt");
    await pdf.setFontSize(5);
    await pdf.html(string);
    await pdf.save("test.pdf");
  };

  return (
    <Corelayout>
      <Container>
        <BtnCustom>
          <Button>
            <Link to="/create">add human</Link>
          </Button>

          <Button onClick={onDownload}>Print pdf</Button>
        </BtnCustom>
        <Contents>
          <TblStyle>
            <Table columns={columns} dataSource={humanlistReducer.result} />
          </TblStyle>
        </Contents>

        <div
          style={{
            position: "fixed",
            top: "-100%",
            zIndex: "-10",
            marginLeft: -9999,
          }}
        >
          <Report reportRef={ref} />
        </div>
      </Container>
    </Corelayout>
  );
}

const Container = styled.span`
  background-color: white;
`;

const TblStyle = styled.div`
  padding: 20px;
  margin: 20px;
`;
const BtnCustom = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: end;
  margin: 10px;
  .ant-btn {
    color: white;
    background: linear-gradient(to right, rgb(0, 4, 40), rgb(0, 78, 146));
    height: 50px;
    border-radius: 12px;
    font-weight: 300px;
  }
`;
const Contents = styled.div`
  margin: 10px;
  padding-bottom: 20px;
  background-color: white;
  /* height: 95%; */
`;
