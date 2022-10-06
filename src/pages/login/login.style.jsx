import styled, { createGlobalStyle } from "styled-components";
export const Body = styled.div`
  background-image: linear-gradient(310deg, #df98fa, #9055ff);
  font-family: sans-serif;
  height: 100vh;
`;
export const Container = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  width: 1200px;
  height: 800px;
  border-radius: 20px;
  display: grid;
  grid-template-columns: repeat(2, 50%);
  box-shadow: var(--box-shadow);
  transition-duration: 1s;

  .welcome {
    font-size: 75px;
    font-weight: 300;
    margin-top: 330px;
    text-shadow: var(--box-shadow);
  }

  .left {
    background-image: url("https://images.unsplash.com/photo-1615400014497-55726234cccb?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYxNzg4Njg0Ng&ixlib=rb-1.2.1&q=85");
    background-size: cover;
    background-position: center;
    /* box-shadow: var(--box-shadow); */
    margin: auto;
    width: 95%;
    height: 96%;
    border-radius: 20px;
  }

  .login {
    padding-top: 35%;
    text-align: center;
    text-transform: uppercase;
    font-weight: 300;
    font-size: 40px;
    text-shadow: var(--box-shadow);
  }

  @media (max-width: 1250px) {
    width: 600px;
    display: block;

    .left {
      display: none;
    }

    .right {
      margin-top: 16px;
      background-image: url("https://images.unsplash.com/photo-1615400014497-55726234cccb?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYxNzg4Njg0Ng&ixlib=rb-1.2.1&q=85");
      background-size: cover;
      background-position: center;
      box-shadow: var(--box-shadow);
    }
  }

  @media (max-height: 850px) {
    width: 1000px;
    height: 600px;
    /* display: block; */
    .welcome {
      margin-top: 240px;
      font-size: 60px;
    }
  }
`;
export const InputCustom = styled.input`
  display: block;
  margin: 20px auto;
  width: 60%;
  height: 50px;
  border: solid #999 1px;
  border-radius: 5px;
  text-indent: 15px;
  transition: all 200ms;
  box-shadow: var(--box-shadow);
  font-size: 18px;

  :focus {
    width: 70%;
  }
`;
export const Label = styled.label`
  position: absolute;
  margin: -76px 130px;
  font-size: 12px;
  white-space: nowrap;
  background: #fff;
  padding: 0 5px;
  color: #999;
  /* transition: all 200ms; */
  text-shadow: var(--box-shadow);
`;
export const ButtonResgis = styled.button`
  display: block;
  margin: 20px auto;
  width: 60%;
  height: 50px;
  border: solid #999 1px;
  border-radius: 5px;
  text-indent: 15px;
  transition: all 200ms;
  box-shadow: var(--box-shadow);
  font-size: 18px;
  background-image: linear-gradient(310deg, #df98fa, #9055ff);

  :focus {
    width: 70%;
  }
`;
