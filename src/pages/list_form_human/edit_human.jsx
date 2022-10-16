import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link, useMatch, useNavigate } from "react-router-dom";
import * as HumanEditActions from "../../action/edithuman.action,";
import { useSelector } from "react-redux";
import Corelayout from "../../components/layout/corelayout/corelayout";
import { useFormik } from "formik";
import styled from "styled-components";

const Edit_human = () => {
  const HumanEditReducer = useSelector((state) => state.edithumanReducer);
  console.log("HumanEditReducer :>> ", HumanEditReducer);
  const dispatch = useDispatch();
  const match = useMatch("/edit/:id");
  useEffect(() => {
    let id = match?.params.id;
    dispatch(HumanEditActions.getProductById(id));
  }, []);
  return <></>;
};

export default Edit_human;
