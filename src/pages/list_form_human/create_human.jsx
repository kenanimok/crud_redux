import React from "react";
import { useState } from "react";
import Corelayout from "../../components/layout/corelayout/corelayout";
import { useFormik } from "formik";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import * as CHumanaction from "../../action/createhuman.action";
const CreateHuman = () => {
  const [selectedImage, setSelectedImage] = useState();
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      fname: "",
      lname: "",
      username: "",
      password: "",
      email: "",
    },
    onSubmit: (values) => {
      const data = values;
      if (selectedImage !== undefined) {
        data.avatar = selectedImage.name;
      } else {
        data;
      }
      console.log("resultdata", data);
      dispatch(CHumanaction.AddHuman(data));
    },
  });

  const imageChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedImage(e.target.files[0]);
    }
  };

  return (
    <Corelayout>
      <Container>
        <LayoutForm>
          <Formcon onSubmit={formik.handleSubmit}>
            <Continput>
              <LabelCustom htmlFor="avatar">avatar</LabelCustom>

              <input
                accept="image/*"
                type="file"
                onChange={imageChange}
                required="please input image"
              />
            </Continput>

            {selectedImage && (
              <ContainerImg>
                <img
                  style={{ maxWidth: "100%", maxHeight: 200 }}
                  src={URL.createObjectURL(selectedImage)}
                  alt="Thumb"
                />
              </ContainerImg>
            )}
            <br />

            <Continput>
              <LabelCustom htmlFor="fname">fname</LabelCustom>
              <StyleInput
                id="fname"
                name="fname"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.fname}
              />
            </Continput>

            <Continput>
              <LabelCustom htmlFor="laname">lname</LabelCustom>
              <StyleInput
                id="lname"
                name="lname"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.lname}
              />
            </Continput>

            <Continput>
              <LabelCustom htmlFor="laname">password</LabelCustom>
              <StyleInput
                id="password"
                name="password"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.password}
              />
            </Continput>

            <Continput>
              <LabelCustom htmlFor="username">Username </LabelCustom>
              <StyleInput
                id="username"
                name="username"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.username}
              />
            </Continput>

            <Continput>
              <LabelCustom htmlFor="email">email </LabelCustom>
              <StyleInput
                id="email"
                name="email"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.email}
              />
            </Continput>

            <Btnsub type="submit">Submit</Btnsub>
          </Formcon>
        </LayoutForm>
      </Container>
    </Corelayout>
  );
};

export default CreateHuman;

const Container = styled.div`
  margin: 10px;
  background-color: white;
  height: 95%;
  /* border-radius: 20px; */
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-content: flex-start;
`;

const Formcon = styled.form`
  display: flex;
  justify-content: start;
  flex-direction: column;
`;

const LayoutForm = styled.div`
  margin: 20px;
  padding: 20px;
`;

const StyleInput = styled.input`
  width: 50%;
  height: 50px;
  line-height: 21px;
  background-color: #fff;
  border: 1px solid #003566;
  padding: 0.75rem 1.125rem;
  margin-bottom: 20px;
`;

const Continput = styled.div`
  display: grid;
  grid-template-columns: 0.5fr 8fr;
  grid-gap: 0px 10px;
  justify-content: center;
`;

const LabelCustom = styled.label`
  display: flex;
  align-items: center;
`;

const Btnsub = styled.button`
  position: relative;
  left: 5%;

  margin: 10px;
  width: 50%;
  color: #0084ff;
  text-shadow: 0 0 10px rgba(124, 192, 255, 0.4);
  background-color: #001b35;
  border: 1px solid #003e78;
  height: 50px;

  :hover {
    background: #002d58;
    color: #4ba8ff;
  }
`;

const ContainerImg = styled.div`
  display: flex;
  padding-left: 10%;
`;
