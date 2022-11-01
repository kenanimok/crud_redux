import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Corelayout from "../../components/layout/corelayout/corelayout";
import styled from "styled-components";
import { Select } from "antd";

const Flag_ = () => {
  const [items, setItems] = useState([]);
  const [q, setQ] = useState("");
  const [searchParam] = useState(["capital", "name", "numericCode"]);
  const [filterParam, setFilterParam] = useState(["All"]);
  console.log("filter_param", filterParam);

  useEffect(() => {
    getdata();
  }, []);

  const { Option } = Select;
  const handleChange = (value) => {
    console.log(`selected ${value}`);
    setFilterParam(value);
  };

  const getdata = async () => {
    try {
      const resp = await axios.get(
        "https://raw.githubusercontent.com/iamspruce/search-filter-painate-reactjs/main/data/countries.json"
      );
      console.log("resp_resp_resp", resp);
      setItems(resp.data);
    } catch (err) {
      console.error(err);
    }
  };

  const data = Object.values(items);

  function search(items) {
    return items.filter((item) => {
      if (item.region == filterParam) {
        return searchParam.some((newItem) => {
          return (
            item[newItem].toString().toLowerCase().indexOf(q.toLowerCase()) > -1
          );
        });

        // return item;
      } else if (filterParam == "All") {
        return item;
      }
    });
  }

  return (
    <Corelayout>
      <Container>
        <CustomSelect>
          <SelectCs
            defaultValue="All"
            style={{
              width: 120,
            }}
            onChange={handleChange}
          >
            <Option value="Africa">Africa</Option>
            <Option value="Americas">Americas</Option>
            <Option value="Asia">Asia</Option>
          </SelectCs>
        </CustomSelect>

        <Boxcard>
          {search(data).map((item, index) => (
            <Titlecard key={index} color={"white"}>
              <div className="boxcol">
                <img src={item.flag.large} alt={item.name} width="100%" />
                <h2 style={{ color: "white", padding: "10px" }}>{item.name}</h2>
                <h2 style={{ color: "white", padding: "10px" }}>
                  {item.region}
                </h2>
              </div>
            </Titlecard>
          ))}
        </Boxcard>
      </Container>
    </Corelayout>
  );
};

export default Flag_;
const Boxcard = styled.div`
  background-color: #f0f2f5;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  width: 100%;
  height: 100%;
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  justify-content: center;

  @media only screen and (max-width: 1500px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media only screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media only screen and (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const Container = styled.div`
  display: grid;
`;

export const Titlecard = styled.div`
  width: ${(props) => (props.width ? props.width : "100%")};
  height: ${(props) => (props.height ? props.height : "100%")};
  background: linear-gradient(to right, rgb(0, 4, 40), rgb(0, 78, 146));
  box-shadow: ${(props) =>
    props.isPdfReport ? "0px" : "0px 1px 16px #eaeaea"};
  border: ${(props) => (props.isPdfReport ? "1px solid #eaeaea" : "0px")};
  border-radius: 26px;
  color: #ffffff;
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
    align-items: flex-end;
  }

  .col-center {
    display: flex;
    align-items: center;
  }
  .boxcol {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const CustomSelect = styled.span`
  display: flex;
  justify-content: end;
  margin-top: 10px;
  margin-right: 10px;
  .ant-select:not(.ant-select-customize-input) .ant-select-selector {
    display: flex;
    flex-direction: row;
    align-items: center;
    background: linear-gradient(to right, rgb(0, 4, 40), rgb(0, 78, 146));
    color: white;
    border-radius: 12px;
    height: 50px;
    font-weight: 200;
  }
`;
const SelectCs = styled(Select)``;
