import React, { useEffect } from "react";
import Corelayout from "../../components/layout/corelayout/corelayout";
import styled from "styled-components";
import { Space, Table, Tag, Dropdown, Menu } from "antd";
import * as listAction from "../../action/listhuman.action";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
// import { Dropdown, Menu, Space } from "antd";

export default function List_human() {
  const humanlistReducer = useSelector((state) => state.listhumanReducer);
  console.log("rererererducerdata", humanlistReducer);

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
                  label: <Link to="/edithuman">edit</Link>,
                },
                {
                  key: "2",
                  label: (
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://www.aliyun.com"
                    >
                      2nd menu item (disabled)
                    </a>
                  ),
                },
              ]}
            />
          )}
        >
          <a onClick={(e) => e.preventDefault()}>
            Hover me
            {/* <DownOutlined /> */}
            {/* <Space>
              Hover me
              <DownOutlined />
            </Space> */}
          </a>
        </Dropdown>
      ),
    },

    // {
    //   title: "Tags",
    //   key: "tags",
    //   dataIndex: "tags",
    //   render: (_, { tags }) => (
    //     <>
    //       {tags.map((tag) => {
    //         let color = tag.length > 5 ? "geekblue" : "green";
    //         if (tag === "loser") {
    //           color = "volcano";
    //         }
    //         return (
    //           <Tag color={color} key={tag}>
    //             {tag.toUpperCase()}
    //           </Tag>
    //         );
    //       })}
    //     </>
    //   ),
    // },
    // {
    //   title: "Action",
    //   key: "action",
    //   render: (_, record) => (
    //     <Space size="middle">
    //       <a>Invite {record.name}</a>
    //       <a>Delete</a>
    //     </Space>
    //   ),
    // },
  ];
  return (
    <Corelayout>
      <Container>
        <TblStyle>
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
`;
