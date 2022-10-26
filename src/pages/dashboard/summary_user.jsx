import React from "react";
import styled from "styled-components";
import Corelayout from "../../components/layout/corelayout/corelayout";
import { Col, Row } from "antd";
import { AiFillFrown } from "react-icons/ai";

const Summary_user = () => {
  return (
    <>
      <Corelayout>
        <Containers>
          <ContainerCardReport padding="20px 20px 35px 20px">
            <Row>
              <Col span={24}>
                <Titlecalen>
                  ประจำวันที่ 1 กรกฎาคม 2565 ถึง วันที่ 31 กรกฎาคม 2565
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
          </ContainerCardReport>

          <ContainerCardReport
            ppadding="10px 20px"
            background={"#0b2946"}
            color={"white"}
          >
            <Gbox>
              <div className="col-center">
                <Iconsmile />
                <TextTitle>
                  จำนวนผู้ใช้งานทั้งหมด (คน)
                  <p>(จากผู้ลงทะเบียน 30 คน)</p>
                </TextTitle>
              </div>
              <div className="col-button">
                <PopulationTotal>2,000</PopulationTotal>
              </div>
            </Gbox>
          </ContainerCardReport>

          <Boxcard>
            <ContainerCardReport></ContainerCardReport>

            <ContainerCardReport className="larg"></ContainerCardReport>

            {/* <ContainerCardReport></ContainerCardReport> */}
          </Boxcard>
        </Containers>
      </Corelayout>
    </>
  );
};

export default Summary_user;

const Containers = styled.div`
  display: grid;
  margin: 20px;
  gap: 20px;
`;

const ContainerCardReport = styled.div`
  width: ${(props) => (props.width ? props.width : "100%")};
  height: ${(props) => (props.height ? props.height : "100%")};
  background: ${(props) => (props.background ? props.background : "white")};
  box-shadow: ${(props) =>
    props.isPdfReport ? "0px" : "0px 1px 16px #eaeaea"};
  border: ${(props) => (props.isPdfReport ? "1px solid #eaeaea" : "0px")};
  border-radius: ${(props) =>
    props.boderradius ? `${props.boderradius}` : "24px"};
  color: ${(props) => (props.color ? props.color : `#1d1d42`)};
  padding: ${(props) => (props.padding ? props.padding : "20px")};

  .sub-title {
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    color: #b1b1b1;
    margin-left: 5px;
  }

  .col-button {
    display: flex;
    justify-content: end;
    /* display: -webkit-flex; */
    justify-content: flex-end;
    align-items: center;
  }

  .col-center {
    display: flex;
    align-items: center;
  }
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

const Iconsmile = styled(AiFillFrown)`
  width: 70px;
  height: 70px;
`;

export const TextTitle = styled.span`
  margin-left: 18px;
  font-size: 18px;
  font-weight: 300;
  color: white;
  display: block;
  line-height: 22px;

  p {
    font-size: 16px;
    color: #b1b1b1;
  }
`;

export const PopulationTotal = styled.span`
  font-weight: 500;
  font-size: 40px;
  color: white;
  display: flex;
  justify-content: end;
`;

const Gbox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const Boxcard = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  justify-content: center;
  width: 100%;
  height: 100%;

  .larg {
    grid-column: 2/4;
  }
`;
