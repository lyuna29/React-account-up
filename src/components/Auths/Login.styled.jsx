import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100vw;
  height: 1000px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StLayout = styled.div`
  display: grid;
  grid-template-rows: 65% 35%;
  border-radius: 30px;
  width: 500px;
  height: 650px;
  background-color: #9d9d9d;
`;

export const StSignup = styled.div`
  display: grid;
  grid-template-rows: 80% 20%;
  border-radius: 30px;
  width: 500px;
  height: 650px;
  background-color: #9d9d9d;
`;

export const StLogo = styled.img`
  width: 200px;
  height: auto;
  margin: 0 auto;
  margin-top: 30px;
  cursor: pointer;
  top: 5%;
`;

export const StInput = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  input {
    width: 300px;
    height: 40px;
    margin: 20px;
  }
`;

export const StBtn = styled.div`
  margin-top: 20px;
  button {
    border-radius: 10px;
    border: 0;
    width: 100px;
    height: 40px;
    margin: 25px;
  }
`;
