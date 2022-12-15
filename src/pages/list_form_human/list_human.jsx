import React, { useEffect, useState, useContext } from "react";
import Corelayout from "../../components/layout/corelayout/corelayout";
import styled from "styled-components";
import { Space, Table, Tag, Dropdown, Menu, Button, Pagination } from "antd";
import { DownOutlined } from "@ant-design/icons";
import * as listAction from "../../action/listhuman.action";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ThemeContext } from "../../App";
// import { Dropdown, Menu, Space } from "antd";

export default function List_human() {
  const humanlistReducer = useSelector((state) => state.listhumanReducer);
  const [current, setCurrent] = useState(1);
  const { setTheme, theme } = useContext(ThemeContext);

  console.log("humanlistReducer :>> ", humanlistReducer);
  const navigate = useNavigate();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listAction.getDataList(current));
  }, [current]);

  const onChangePages = (perpage) => {
    // console.log("setCurrent :>> ", perpage);
    setCurrent(perpage);
  };

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
      render: (text) => <p>{text}</p>,
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
                  label: <p onClick={() => deleteHuman(record)}>delete</p>,
                },
              ]}
            />
          )}
        >
          <p onClick={(e) => e.preventDefault()}>
            <DownOutlined />
          </p>
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

  return (
    <>
      <Bodycontainer>
        <Tblcustom>
          <Table
            columns={columns}
            dataSource={humanlistReducer?.result?.data}
            pagination={false}
          />
        </Tblcustom>

        <PaginationCs>
          <Pagination
            style={{ padding: "10px" }}
            current={current}
            onChange={onChangePages}
            total={humanlistReducer?.result?.total}
            showSizeChanger={false}
          />
        </PaginationCs>
      </Bodycontainer>
    </>
  );
}

const Bodycontainer = styled.div`
  padding: 30px;
  /* height: 100vh; */
`;

const Tblcustom = styled.div`
  .ant-table {
    /* background: rgb(61 61 61 / 85%); */
    background: ${({ theme }) => theme.bgtb};
    color: ${({ theme }) => theme.text};
    :hover:none {
    }
  }

  .ant-table-thead > tr > th {
    background: ${({ theme }) => theme.bg};
    color: ${({ theme }) => theme.text};
  }
`;

const PaginationCs = styled.div`
  .ant-pagination-item-link {
    background: ${({ theme }) => theme.bg};
    color: ${({ theme }) => theme.text};
  }
  .ant-pagination-item a {
    background: ${({ theme }) => theme.bg};
    color: ${({ theme }) => theme.text};
  }

  .ant-pagination-item-active {
    background: ${({ theme }) => theme.bg};
    color: ${({ theme }) => theme.text};
  }
`;
