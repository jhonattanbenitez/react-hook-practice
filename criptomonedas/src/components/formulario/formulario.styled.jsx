import styled from "styled-components";

const Button = styled.button`
  @import url("https://fonts.googleapis.com/css2?family=Fira+Code&display=swap");
  font-family: "Fira Code", monospace;
  margin-top: 20px;
  font-weight: bold;
  font-size: 20px;
  padding: 10px;
  background-color: #66a2fe;
  border: none;
  width: 100%;
  border-radius: 10px;
  color: #fff;
  transition: background-color 0.3s ease;
  :hover {
    background-color: #326ac0;
    cursor: pointer;
  }
`;

export default Button;
