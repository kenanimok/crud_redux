export const defaultData = {
  start_at: 1659638184,
  end_at: 1659674184,
  updated_at: 1659674184,
  dashboard_data: {
    summary_tourists: 0,
    gender_summary_data: {
      total_female: 58126,
      percent_female: 46.51, //(total_f/total_tourists)*100
      total_male: 103874,
      percent_male: 83.11,
      total_agender: 230,
      percent_agender: 2.0,
    },
    age_summary_data: [
      {
        age_range: "<=25",
        total_age: 300,
        percent_age_range: 0.24, //(total_age/total_tourists)*100
        total_tourists_gender: 300,
        percent_tourists_gender: 0.24,
        amount_female: 100,
        amount_mele: 200,
        amount_agender: 0,
      },
      {
        age_range: "26-34",
        total_age: 300,
        percent_age_range: 50,
        total_tourists_gender: 300,
        percent_tourists_gender: 0.24,
        amount_female: 100,
        amount_mele: 200,
        amount_agender: 0,
      },
      {
        age_range: "na_age",
        total_age: 300,
        percent_age_range: 0.24,
        total_tourists_gender: 300,
        percent_tourists_gender: 0.24,
        amount_female: 100,
        amount_mele: 200,
        amount_agender: 0,
      },
      {
        age_range: "na_age_gender",
        total_age: 300,
        percent_age_range: 0.24,
        total_tourists_gender: 0,
        percent_tourists_gender: 0,
        amount_female: 0,
        amount_mele: 0,
        amount_agender: 300,
      },
    ],
    list_data: [
      {
        nationality_th_name: "some_natiolity1_name",
        total_tourists: 2500,
        gender_data: [
          {
            gender: "F",
            age_data: [
              {
                span_age: "25-35",
                total_age: 150,
              },
              {
                span_age: "35-44",
                total_age: 0,
              },
              {
                span_age: "na_age",
                total_age: 300,
              },
              {
                span_age: "na_age_gender",
                total_age: 300,
              },
            ],
          },
          {
            gender: "M",
            age_data: [
              {
                span_age: "25-35",
                total_age: 150,
              },
              {
                span_age: "na_age",
                total_age: 300,
              },
              {
                span_age: "na_age_gender",
                total_age: 300,
              },
            ],
          },
          {
            gender: "A",
            age_data: [
              {
                span_age: "25-35",
                total_age: 150,
              },
              {
                span_age: "35-44",
                total_age: 0,
              },
              {
                span_age: "na_age",
                total_age: 300,
              },
              {
                span_age: "na_age_gender",
                total_age: 300,
              },
            ],
          },
        ],
      },
      {
        nationality_th_name: "some_natiolity2_name",
        total_tourists: 3000,
        gender_data: [
          {
            gender: "F",
            age_data: [
              {
                span_age: "25-34",
                total_age: 150,
              },
              {
                span_age: "35-44",
                total_age: 0,
              },
              {
                span_age: "na_age",
                total_age: 300,
              },
              {
                span_age: "na_age_gender",
                total_age: 300,
              },
            ],
          },
          {
            gender: "M",
            age_data: [
              {
                span_age: "25-35",
                total_age: 150,
              },
              {
                span_age: "na_age",
                total_age: 300,
              },
              {
                span_age: "na_age_gender",
                total_age: 300,
              },
            ],
          },
          {
            gender: "A",
            age_data: [
              {
                span_age: "25-35",
                total_age: 150,
              },
              {
                span_age: "na_age",
                total_age: 300,
              },
              {
                span_age: "na_age_gender",
                total_age: 300,
              },
            ],
          },
        ],
      },
    ],
  },
};

export const columns = [
  {
    title: "วันที่",
    dataIndex: "nationality",
    key: "nationality",
    width: 100,
    className: "dashboard",
    render: (data) => (
      <div style={{ height: "100%" }}>
        <div style={{ padding: "8px 0px" }}>{data}</div>
      </div>
    ),
  },
  {
    title: "เวลา",
    dataIndex: "gender",
    key: "gender",
    width: 100,
    className: "dashboard",
    render: (data) =>
      data.map((item, index) => (
        <div style={{ width: "max-content", padding: "8px 0px" }} key={index}>
          {item}
          <br />
        </div>
      )),
  },
  {
    title: "อุณหภูมิ (oC)",
    dataIndex: "temperature",
    key: "temperature",
    width: 100,
    align: "center",
    className: "dashboard",
    render: (data) =>
      data.map((item, index) => (
        <div style={{ padding: "8px 0px" }} key={index}>
          {item}
          <br />
        </div>
      )),
  },
  {
    title: "ความดันโลหิต (mmHg)",
    dataIndex: "bloodPressure",
    key: "bloodPressure",
    width: 200,
    align: "center",
    className: "dashboard",
    render: (data) =>
      data.map((item, index) => (
        <div style={{ padding: "8px 0px" }} key={index}>
          {item}
          <br />
        </div>
      )),
  },
  {
    title: "ออกซิเจนในเลือด (%)",
    dataIndex: "bloodOxygen",
    key: "bloodOxygen",
    width: 200,
    align: "center",
    className: "dashboard",
    render: (data) =>
      data.map((item, index) => (
        <div style={{ padding: "8px 0px" }} key={index}>
          {item}
          <br />
        </div>
      )),
  },
  {
    title: "น้ำตาลในเลือด (mg/dl)",
    dataIndex: "bloodSugar",
    key: "bloodSugar",
    width: 200,
    align: "center",
    className: "dashboard",
    render: (data) =>
      data.map((item, index) => (
        <div style={{ padding: "8px 0px" }} key={index}>
          {item}
          <br />
        </div>
      )),
  },
  {
    title: "คลื่นไฟฟ้าหัวใจ",
    dataIndex: "ecg",
    key: "ecg",
    width: 200,
    align: "center",
    className: "dashboard",
    render: (data) =>
      data.map((item, index) => (
        <div style={{ padding: "8px 0px" }} key={index}>
          {item}
          <br />
        </div>
      )),
  },
  {
    title: "ดัชนีมวลกาย",
    dataIndex: "bodyMass",
    key: "bodyMass",
    width: 180,
    align: "center",
    className: "dashboard",
    render: (data) =>
      data.map((item, index) => (
        <div
          style={{
            justifyContent: "center",
            height: "auto",
            padding: "8px 16px 8px 0",
          }}
          key={index}
        >
          {item}
          <br />
        </div>
      )),
  },
];

export const dataSouce = [
  {
    nationality: "15/06/2565",
    gender: [
      "00:00-00.59",
      "01:00-01.59",
      "08:00-08:59",
      "12:00-12.59",
      "14:00-14.59",
      "15:00-15.59",
      "21:00-21.59",
    ],
    temperature: ["-", "37.5", "-", "-", "-", "36.5", "-"],
    bloodPressure: ["-", "-", "136/35", "-", "-", "136/35", "136/35"],
    bloodOxygen: ["94", "94", "-", "-", "98", "-", "-"],
    bloodSugar: ["-", "-", "130", "126", "98", "-", "130"],
    ecg: ["Normal", "-", "-", "-", "Normal", "-", "-"],
    bodyMass: ["26.7", "-", "34.8", "-", "-", "-", "36.0"],
  },
  {
    nationality: "16/06/2565",
    gender: [
      "00:00-00.59",
      "01:00-01.59",
      "08:00-08:59",
      "12:00-12.59",
      "14:00-14.59",
      "15:00-15.59",
      "21:00-21.59",
    ],
    temperature: ["-", "37.5", "-", "-", "-", "36.5", "-"],
    bloodPressure: ["-", "-", "136/35", "-", "-", "136/35", "136/35"],
    bloodOxygen: ["94", "94", "-", "-", "98", "-", "-"],
    bloodSugar: ["-", "-", "130", "126", "98", "-", "130"],
    ecg: ["Normal", "-", "-", "-", "Normal", "-", "-"],
    bodyMass: ["26.7", "-", "34.8", "-", "-", "-", "36.0"],
  },
  {
    nationality: "17/06/2565",
    gender: [
      "00:00-00.59",
      "01:00-01.59",
      "08:00-08:59",
      "12:00-12.59",
      "14:00-14.59",
      "15:00-15.59",
      "21:00-21.59",
    ],
    temperature: ["-", "37.5", "-", "-", "-", "36.5", "-"],
    bloodPressure: ["-", "-", "136/35", "-", "-", "136/35", "136/35"],
    bloodOxygen: ["94", "94", "-", "-", "98", "-", "-"],
    bloodSugar: ["-", "-", "130", "126", "98", "-", "130"],
    ecg: ["Normal", "-", "-", "-", "Normal", "-", "-"],
    bodyMass: ["26.7", "-", "34.8", "-", "-", "-", "36.0"],
  },
  {
    nationality: "18/06/2565",
    gender: [
      "00:00-00.59",
      "01:00-01.59",
      "08:00-08:59",
      "12:00-12.59",
      "14:00-14.59",
      "15:00-15.59",
      "21:00-21.59",
    ],
    temperature: ["-", "37.5", "-", "-", "-", "36.5", "-"],
    bloodPressure: ["-", "-", "136/35", "-", "-", "136/35", "136/35"],
    bloodOxygen: ["94", "94", "-", "-", "98", "-", "-"],
    bloodSugar: ["-", "-", "130", "126", "98", "-", "130"],
    ecg: ["Normal", "-", "-", "-", "Normal", "-", "-"],
    bodyMass: ["26.7", "-", "34.8", "-", "-", "-", "36.0"],
  },
  {
    nationality: "19/06/2565",
    gender: [
      "00:00-00.59",
      "01:00-01.59",
      "08:00-08:59",
      "12:00-12.59",
      "14:00-14.59",
      "15:00-15.59",
      "21:00-21.59",
    ],
    temperature: ["-", "37.5", "-", "-", "-", "36.5", "-"],
    bloodPressure: ["-", "-", "136/35", "-", "-", "136/35", "136/35"],
    bloodOxygen: ["94", "94", "-", "-", "98", "-", "-"],
    bloodSugar: ["-", "-", "130", "126", "98", "-", "130"],
    ecg: ["Normal", "-", "-", "-", "Normal", "-", "-"],
    bodyMass: ["26.7", "-", "34.8", "-", "-", "-", "36.0"],
  },
];

export const origData = [
  {
    pos: "15/06/2565",
    pos_count: {
      line_type_count: "count",
      refund_count: 1,
      line_voids_count: 1,
    },
    pos_value: {
      line_type_value: "dollar",
      refund_value: 5.25,
      line_voids_value: 12.95,
    },
  },
  {
    pos: "17/06/2565",
    pos_count: {
      line_type_count: "count",
      refund_count: 1,
      line_voids_count: 1,
    },
    pos_value: {
      line_type_value: "dollar",
      refund_value: 3.25,
      line_voids_value: 5.48,
    },
  },
  {
    pos: "18/06/2565",
    pos_count: {
      line_type_count: "count",
      refund_count: 1,
      line_voids_count: 1,
    },
    pos_value: {
      line_type_value: "dollar",
      refund_value: 3.25,
      line_voids_value: 5.48,
    },
  },
  {
    pos: "19/06/2565",
    pos_count: {
      line_type_count: "count",
      refund_count: 1,
      line_voids_count: 1,
    },
    pos_value: {
      line_type_value: "dollar",
      refund_value: 3.25,
      line_voids_value: 5.48,
    },
  },
  {
    pos: "20/06/2565",
    pos_count: {
      line_type_count: "count",
      refund_count: 1,
      line_voids_count: 1,
    },
    pos_value: {
      line_type_value: "dollar",
      refund_value: 3.25,
      line_voids_value: 5.48,
    },
  },
  {
    pos: "30/06/2565",
    pos_count: {
      line_type_count: "count",
      refund_count: 1,
      line_voids_count: 1,
    },
    pos_value: {
      line_type_value: "dollar",
      refund_value: 3.25,
      line_voids_value: 5.48,
    },
  },
];

export const columnsReport = [
  {
    Header: "id",
    accessor: "pos",
    enableRowSpan: true,
  },
  {
    Header: "fname",
    accessor: "line_type",
  },
  {
    Header: "lname",
    accessor: "refund",
  },
  {
    Header: "username",
    accessor: "line_voids",
  },
  // {
  //   Header: "ออกซิเจนในเลือด (%)",
  //   accessor: "line_voids1",
  // },
  // {
  //   Header: "น้ำตาลในเลือด (mg/dl)",
  //   accessor: "line_voids2",
  // },
  // {
  //   Header: "คลื่นไฟฟ้าหัวใจ",
  //   accessor: "line_voids3",
  // },
  // {
  //   Header: "ดัชนีมวลกาย",
  //   accessor: "line_voids4",
  // },
];
