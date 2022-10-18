import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Corelayout from "../../components/layout/corelayout/corelayout";
import styled from "styled-components";

const Flag_ = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  //   console.log("item,itemitemitem", items);
  const [q, setQ] = useState("");
  const [searchParam] = useState(["capital", "name", "numericCode"]);
  const [filterParam, setFilterParam] = useState(["All"]);

  useEffect(() => {
    getdata();
  }, []);

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
        {/* <Boxcard>
          {data.map((item, index) => (
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
        </Boxcard> */}

        <div className="select">
          <select
            onChange={(e) => {
              setFilterParam(e.target.value);
            }}
            className="custom-select"
            aria-label="Filter Countries By Region"
          >
            <option value="All">Filter By Region</option>
            <option value="Africa">Africa</option>
            <option value="Americas">America</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
          </select>
          <span className="focus"></span>
        </div>

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
      {/* <ul>
        {data.map((item) => (
          <li>
            <article className="card" key={item.alpha3Code}>
              <div className="card-image">
                <img src={item.flag.large} alt={item.name} />
              </div>
              <div className="card-content">
                <h2 className="card-name">{item.name}</h2>
                <ol className="card-list">
                  <li>
                    population: <span>{item.population}</span>
                  </li>
                  <li>
                    Region: <span>{item.region}</span>
                  </li>
                  <li>
                    Capital: <span>{item.capital}</span>
                  </li>
                </ol>
              </div>
            </article>
          </li>
        ))}
      </ul> */}
    </Corelayout>
  );
};

export default Flag_;
const Boxcard = styled.div`
  margin-top: 10px;
  background-color: #f0f2f5;

  display: grid;
  /* grid-template-columns: repeat(auto-fit, minmax(200px, 7fr)); */
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
  gap: ${(props) => (props.gap ? `${props.gap}` : "20px")};
`;

export const Titlecard = styled.div`
  width: ${(props) => (props.width ? props.width : "100%")};
  height: ${(props) => (props.height ? props.height : "100%")};
  background: ${(props) => (props.background ? props.background : `#1d1d42`)};
  box-shadow: ${(props) =>
    props.isPdfReport ? "0px" : "0px 1px 16px #eaeaea"};
  border: ${(props) => (props.isPdfReport ? "1px solid #eaeaea" : "0px")};
  border-radius: 26px;
  /* color: ${(props) => (props.color ? props.color : `white`)}; */
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
