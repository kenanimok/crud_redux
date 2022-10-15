import React from "react";
import { useState } from "react";
const Previewimage = (file) => {
  console.log("filelelelee", file);
  const [preview, setPreveiw] = useState({});

  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = () => {
    setPreveiw(reader.result);
  };

  return (
    <>
      <img src={preview} alt="preview" />
    </>
  );
};

export default Previewimage;
