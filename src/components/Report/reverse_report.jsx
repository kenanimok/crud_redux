import React from "react";
import { useMemo } from "react";
import { origData, columnsReport } from "./container";
import styled from "styled-components";

/// ได้แค้หัวตาราง

const Report = (props) => {
  const { reportRef } = props;
  const newData = [];
  origData.forEach((actorObj) => {
    for (let i = 0; i < 3; i++) {
      newData.push({
        pos: actorObj.pos,
        line_type: "00:00-00.59 น.",
        refund: "37.5",
        line_voids: "1111",
        // line_voids1: "2222",
        // line_voids2: "3333",
        // line_voids3: "4444",
        // line_voids4: "5555",
      });
      // newData.push({
      //   pos: actorObj.pos,
      //   line_type: "00:00-00.59 น.",
      //   refund: "37.5",
      //   line_voids: "136/35",
      //   line_voids1: "136/35",
      //   line_voids2: "136/35",
      //   line_voids3: "136/35",
      //   line_voids4: "136/35",
      // });
    }
  });

  console.log("newData :>> ", newData);

  const tdStyle = { padding: "1px", border: "thin solid black !important" };
  const thStyle = { padding: "5px", border: "thin solid black !important" };

  const data = useMemo(() => newData, []);
  const columns = useMemo(() => columnsReport, []);
  // console.log("columns :>> ", columns);

  const arrayOfArrays = [];
  const size = 25;
  for (var i = 0; i < data.length; i += size) {
    arrayOfArrays.push(data.slice(i, i + size));
  }

  console.log("arrayOfArrays :>> ", arrayOfArrays);

  const getRowsData = (listData) => {
    let keys = listData.reduce((a, e) => {
      let estKey = e["pos"];
      (a[estKey] ? a[estKey] : (a[estKey] = null || [])).push(e);
      return a;
    }, {});

    return Object.keys(keys).map((value) => {
      return keys[value].map((obj, index2) => {
        const data = (({ pos, ...o }) => o)(obj);

        return (
          <tr key={"m" + index2}>
            <>
              {index2 === 0 ? (
                <td style={tdStyle} rowSpan={keys[value].length}>
                  {value}
                </td>
              ) : null}
              <>
                {Object.values(data).map((val, index) => {
                  return (
                    <>
                      {index > 1 ? (
                        <td style={tdStyle}>{val}</td>
                      ) : (
                        <td style={tdStyle}>{val}</td>
                      )}
                    </>
                  );
                })}
              </>
            </>
          </tr>
        );
      });
    });
  };

  return (
    <Container ref={reportRef}>
      {arrayOfArrays.map((rowItem, indexKey) => {
        return (
          <Box key={indexKey}>
            <div style={{ textAlign: "center", marginBottom: "15px" }}>
              <div>รายงานการตรวจสุขภาพรายบุคคลของ ภูริท บุญคงเจริญ</div>
              <div>
                ข้อมูลวันที่ 15 มิถุนายน 2565 ถึง วันที่ 15 กรกฎาคม 2565
              </div>
            </div>
            <table style={{ width: "100%" }}>
              <thead>
                <tr>
                  {columns?.map((item, i) => (
                    <th style={thStyle} key={"n" + i}>
                      {item.Header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>{getRowsData(rowItem)}</tbody>
            </table>
          </Box>
        );
      })}
    </Container>
  );
};

export default Report;

export const Container = styled.div`
  .print:last-child {
    page-break-after: auto;
  }

  .new-page {
    height: 1065px;
    page-break-before: always;
    padding-top: "8pt";
  }
`;

export const Box = styled.div`
  margin: 20px;
  width: 800px;
  padding-bottom: 40px;
  font-size: 10px !important;
  font-weight: 700 !important;
`;
