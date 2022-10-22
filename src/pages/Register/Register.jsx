import React from "react";
import styled from "styled-components";
import { BsCircleFill } from "react-icons/bs";
import { AiOutlineMeh } from "react-icons/ai";

const Register = () => {
  return (
    <Container>
      <div className="left">
        {/* <BsCircleFill
          style={{ color: "white", width: "300px", height: "200px" }}
        /> */}
        <Circle></Circle>
        <Smile></Smile>
        <CardGradient></CardGradient>
      </div>

      <div className="right ">
        <FContainer>
          <form>
            <Containform>
              <Labelcs>CARDHOLDER NAME</Labelcs>
              <Inputcs type={"text"} />
            </Containform>

            <Containform>
              <Labelcs>CARD NUMBER</Labelcs>
              <Inputcs type={"text"} />
            </Containform>

            <Containform>
              <RowForm>
                <LabelsDate>EXP. DATE</LabelsDate>
                <LabelsDate>(MM/YY)</LabelsDate>
                <LabelsDate>CVC</LabelsDate>

                <Inputcs type={"text"} />
                <Inputcs type={"text"} />
                <Inputcs type={"text"} width={"70"} />
              </RowForm>
            </Containform>
            <Stlbutton>
              <Buttoncs className="buttton">submit</Buttoncs>
            </Stlbutton>
          </form>
        </FContainer>
      </div>
    </Container>
  );
};

export default Register;
const CardGradient = styled.div`
  position: absolute;
  z-index: 1000;
  top: 15%;
  left: 10%;
  width: 30%;
  height: 33%;

  /* background-image: radial-gradient(circle, #5c0067 0%, #00d4ff 100%); */
  background: linear-gradient(to right, rgb(26, 41, 128), rgb(38, 208, 206));
  border-radius: 10px;
  @media only screen and (max-width: 600px) {
    position: absolute;
    top: 20%;
    left: 5%;
    z-index: 99;
    width: 70%;
    height: 30%;
  }
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  height: 100vh;

  @media only screen and (max-width: 600px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 2fr;
  }

  /* Small devices (portrait tablets and large phones, 600px and up) */

  .left {
    background-image: linear-gradient(to right, rgb(0, 4, 40), rgb(0, 78, 146));
  }

  .right {
    background-color: #fff;
  }
`;

const BorderContaineer = styled.div`
  border: 2px solid black;
`;

const FContainer = styled.div`
  border: 3px solid;
  border-color: rgb(26, 77, 121);
  /* border-image: linear-gradient(to right, rgb(0, 4, 40), rgb(26, 77, 121)); */
  border-radius: 12px;
  padding: 50px;
  position: relative;
  top: 30%;
  left: 20%;
  right: 50%;
  bottom: 50%;

  display: flex;
  flex-direction: column;

  width: 50%;

  .buttton {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  @media only screen and (max-width: 600px) {
    width: 100%;
    left: 0%;
  }
`;

const Inputcs = styled.input`
  border-radius: 10px;
  border: 2px solid #dedddf;
  width: ${(props) => (props.width ? `${props.width}` : "100%")};
  height: 40px;
  padding: 9px;
`;

const Labelcs = styled.label`
  font-weight: 500;
  color: #21092f;
  font-size: 13px;
  letter-spacing: 2px;
`;

const LabelsDate = styled.div`
  font-weight: 500;
  color: #21092f;
  font-size: 13px;
  letter-spacing: 2px;
  margin-left: 5px;
`;

const Containform = styled.div`
  margin: 10px;
  padding: 8px;
`;

const RowForm = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 2fr;
  gap: 0px 10px;
`;

const Circle = styled(BsCircleFill)`
  position: absolute;
  top: 17%;
  margin-left: 10%;
  z-index: 10000;
  width: 300px;
  height: 100px;
  color: white;

  @media only screen and (max-width: 1440px) {
    position: absolute;
    top: 18%;
    margin-left: 50px;
    z-index: 10000;
    width: 300px;
    height: 70px;
  }

  @media only screen and (max-width: 600px) {
    display: none;
  }
`;

const Smile = styled(AiOutlineMeh)`
  position: absolute;
  top: 17%;
  left: 20.5%;
  z-index: 1000000;
  height: 30px;
  width: 30px;
  color: white;

  @media only screen and (max-width: 1440px) {
    position: absolute;
    top: 18%;
    left: 18%;
    z-index: 10000;
    height: 30px;
    width: 30px;
    display: none;
  }

  @media only screen and (max-width: 600px) {
    position: absolute;
    top: 18%;
    left: 10%;
    z-index: 10000;
    height: 30px;
    width: 30px;
    display: none;
  }
`;

const Buttoncs = styled.button`
  border-radius: 10px;
  width: 90%;
  background-image: linear-gradient(to right, rgb(0, 4, 40), rgb(0, 78, 146));
  height: 50px;
  display: flex;
  align-content: center;
  align-items: center;
  color: white;
  font-weight: 500;
  font-size: 20px;
`;

const Stlbutton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
