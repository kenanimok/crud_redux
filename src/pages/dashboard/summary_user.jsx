import React from "react";
import styled from "styled-components";
import Corelayout from "../../components/layout/corelayout/corelayout";
import { Col, Row } from "antd";

const Summary_user = () => {
  return (
    <>
      <Corelayout>
        <Containers>
          <Boxcalendar padding="20px 20px 35px 20px">
            <Row>
              <Col span={24}>
                <Titlecalen>
                  ประจำวันที่
                  <Row>
                    <Col span={7} style={{ paddingRight: "16px" }}>
                      <p>เลือกวันที่</p>
                      <InputCs></InputCs>
                    </Col>

                    <Col span={6} style={{ paddingRight: "16px" }}>
                      <p>เลือกวันที่</p>
                      <InputCs></InputCs>
                    </Col>

                    <Col span={6} style={{ paddingRight: "16px" }}>
                      <p>เลือกวันที่</p>
                      <InputCs></InputCs>
                    </Col>
                  </Row>
                </Titlecalen>
              </Col>
            </Row>
          </Boxcalendar>
        </Containers>
      </Corelayout>
    </>
  );
};

export default Summary_user;

const Containers = styled.div`
  display: grid;
  margin: 20px;
`;

const Boxcalendar = styled.div`
  width: ${(props) => (props.width ? props.width : "100%")};
  height: ${(props) => (props.height ? props.height : "100%")};
  background: ${(props) => (props.background ? props.background : "white")};
  box-shadow: ${(props) =>
    props.isPdfReport ? "0px" : "0px 1px 16px #eaeaea"};
  border: ${(props) => (props.isPdfReport ? "1px solid #eaeaea" : "0px")};
  border-radius: 26px;
  color: ${(props) => (props.color ? props.color : `#1d1d42`)};
  padding: ${(props) => (props.padding ? props.padding : "20px")};
`;

const Titlecalen = styled.div`
  padding: 5px;
  font-size: 24px;
  font-weight: 500px;

  p {
    font-weight: 400;
    font-size: 18px;
    padding-top: 10px;
    margin: 10px;
  }

  span {
    font-size: 14px;
    color: #b1b1b1;
  }
`;
const InputCs = styled.input`
  background-color: white;
  width: 100%;
  border: 1px solid #dde0df;
  border-radius: 16px;
  caret-color: #5d38fa;
  height: 54px;
`;
