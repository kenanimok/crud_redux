import React, { useEffect, useState } from "react";
import Corelayout from "../../components/layout/corelayout/corelayout";
import styled from "styled-components";
import {
  Table,
  Tag,
  Dropdown,
  Menu,
  Button,
  AutoComplete,
  Input,
  Space,
} from "antd";
import { DownOutlined, UserOutlined } from "@ant-design/icons";
import * as listAction from "../../action/listhuman.action";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

export default function List_human() {
  const humanlistReducer = useSelector((state) => state.listhumanReducer);
  const [keyword, setKeyword] = useState();
  const { Search } = Input;

  const navigate = useNavigate();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listAction.SearchData(keyword));
  }, [keyword]);

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
  const onSearch = (value) => {
    setKeyword(value);
  };

  return (
    <Corelayout>
      <Container>
        <TblStyle>
          <Containersearch>
            <Search
              placeholder="input search text"
              onSearch={onSearch}
              style={{
                width: 200,
              }}
            />
          </Containersearch>

          <BtnCustom>
            <Button>
              <Link to="/create">add human</Link>
            </Button>
          </BtnCustom>

          <Table columns={columns} dataSource={humanlistReducer.result} />
        </TblStyle>
      </Container>
    </Corelayout>
  );
}

const Container = styled.div`
  margin: 10px;
  background-color: white;
  height: 95%;
`;

const TblStyle = styled.div`
  padding: 20px;
  margin: 20px;
`;
const BtnCustom = styled.div`
  display: flex;
  justify-content: end;
  margin-bottom: 10px;
  .ant-btn {
    color: white;
    background: linear-gradient(to right, rgb(0, 4, 40), rgb(0, 78, 146));
    height: 50px;
    border-radius: 12px;
    font-weight: 300px;
  }
`;
const Containersearch = styled.div`
  position: relative;
  top: 30px;
`;
