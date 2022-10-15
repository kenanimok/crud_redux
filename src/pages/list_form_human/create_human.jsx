import React from "react";
import { useState } from "react";
import { useRef } from "react";
import Corelayout from "../../components/layout/corelayout/corelayout";
import { useFormik } from "formik";
import Previewimage from "./previewimage";
import styled from "styled-components";
const CreateHuman = () => {
  const [selectedImage, setSelectedImage] = useState();

  const fileRef = useRef(null);
  const formik = useFormik({
    initialValues: {
      avartar: null,
      fname: "",
      lname: "",
      username: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values));
    },
  });

  //   console.log(formik.initialValues);

  const imageChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedImage(e.target.files[0]);
    }
  };

  return (
    <Corelayout>
      <Container>
        <form onSubmit={formik.handleSubmit}>
          <label htmlFor="avartar">Avartar</label>
          {/* <input
            id="avartar"
            name="avartar"
            type="file"
            accept="image/*"
            onChange={(e) => formik.setFieldValue("avartar", e.target.files[0])}
          /> */}

          <input accept="image/*" type="file" onChange={imageChange} />
          {selectedImage && (
            <div>
              <img
                style={{ maxWidth: "100%", maxHeight: 100 }}
                src={URL.createObjectURL(selectedImage)}
                alt="Thumb"
              />
            </div>
          )}

          <label htmlFor="fname">fname</label>
          <input
            id="fname"
            name="fname"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.fname}
          />
          <label htmlFor="laname">Last Name</label>
          <input
            id="lname"
            name="lname"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.lname}
          />
          <label htmlFor="username">Username </label>
          <input
            id="username"
            name="username"
            type="username"
            onChange={formik.handleChange}
            value={formik.values.username}
          />
          {/* {formik.values.avartar && (
            <Previewimage file={formik.values.avartar} />
          )} */}

          <button type="submit">Submit</button>
        </form>
      </Container>
    </Corelayout>
  );
};

export default CreateHuman;

const Container = styled.div`
  margin: 10px;
  background-color: white;
  height: 95%;
`;
// const styles  = {
//     container: {
//       display: "flex",
//       flexDirection: "column",
//       justifyContent: "center",
//       alignItems: "center",
//       paddingTop: 50,
//     },
//     preview: {
//       marginTop: 50,
//       display: "flex",
//       flexDirection: "column",
//     },
//     image: { maxWidth: "100%", maxHeight: 320 },
//     delete: {
//       cursor: "pointer",
//       padding: 15,
//       background: "red",
//       color: "white",
//       border: "none",
//     },
//   };
