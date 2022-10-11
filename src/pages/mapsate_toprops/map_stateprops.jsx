import React, { Component } from "react";
import { connect } from "react-redux"; /* 
A. การที่ Component จะเข้าถึง store ของ redux ได้ จะต้องใช้ตัว connect ซึ้งนำเข้าจาก react-redux
การทีเราเชื่อมกับ redux นั้นด้วย connect เราจะได้ props มาใช้งาน 
สังเกตุได้จากโค้ดด้านล่างนี้ครับเรียกใช้ this.props กันให้พรึมเลยทีเดียว
*/

class Home_x extends Component {
  state = { age: 0 };
  render() {
    return (
      <div>
        <h3>อายุของคุณ: {this.props.age} ปี</h3>
        <button onClick={this.props.increteAge}> + คลิกบวกอายุ </button>
        <button onClick={this.props.decreteAge}> - คลิกลบอายุ </button>
        {/* 
B. จะสังเกตุว่าไม่มีการใช้ this.state แล้วนะครับ เราเปลียนมาใช้ this.props เพราะเราใช้ props เข้าถึง
ส่วนต่างๆของ redux แทนครับ
*/}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    age: state,
  };
} /* 
C. Function mapStateToProps โดย function นี้จะรับ parameter เป็น state ที่ได้มาจากตัว redux store 
(ในไฟล์ src/index.js) โดยที่ในไฟล์ src/index.js นะมี reducer ที่ชื่อ countAge นะครับถ้าจำไม่ได้ย้อนกลับไปดูนะครับ
แล้ว return ค่า object ออกไปโดยในนี้ตั้งชื่อ Object ว่า age
*/

function mapDispatchToProps(dispatch) {
  return {
    increteAge: () => {
      dispatch({ type: "INCREMENT" });
    },
    decreteAge: () => {
      dispatch({ type: "DECREMENT" });
    },
  };
} /* 
D. mapDispatchToProps โดย function นี้จะรับ parameter เป็น dispatch แล้ว return object ซึ้งในโค้ดจะ return properties
ที่ชื่อว่า increteAge และ decreteAge ซึ้งสร้างมันเป็น function ที่เวลาเรียกใช้มันก็จะเรียกคำสั่ง dispatch แล้วทำการ type ไปครับ

ทั้ง mapStatetoProps และ mapDispatchToProps มันจะกลายไปเป็น props ของ Home ดังนั้นเวลาเราเรียกใช้
เราจึงเรียกใช้ด้วยคำสั่ง this.props.age, this.props.increteAge และ this.props.decreteAge
*/

export default connect(mapStateToProps, mapDispatchToProps)(Home_x); /* 
E. ข้ามมาข้อ E ก่อนนะครับ (อยากข้าม 555 จะได้เข้าใจง่ายขึ้น) ปกติเราจะ export default homeใช้มัยครับ
แต่พอใช้ connect เราจะต้อง export default connect แทนเหมือนโค้ดข้างบนโดยตัว connect จะรับ parameter 2 ตัว
(จริงๆ มันมากกว่า 2 ตัวครับแต่ส่วนใหญ่ใช้กันซึ้ง parameter 2 ตัวนั้นคือ mapStateToProps, mapDispatchToProps)
โดยทั้ง 2 ตัวต่างต่างก็เป็น function
*/
