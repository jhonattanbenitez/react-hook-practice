import styled from "styled-components";

export const Campo = styled.div`
  display: flex;
  margin-bottom: 1rem;
  align-items: center;
`;
export const Label = styled.label`
  flex: 0 0 100px;
`;
export const Select = styled.select`
  display: block;
  width: 100%;
  padding: 1rem;
  border: 1px solid #e1e1e1;
  -webkit-appearance: none;
  background-color: #fafafa;
`;

export const InputRadio = styled.input`
  margin: 0 1rem;
`;

export const Button = styled.button`
  margin-top: 2rem;
  background-color: #0083ff;
  font-size: 16px;
  width: 100%;
  color: white;
  padding: 1rem;
  text-transform: uppercase;
  font-weight: bold;
  border: none;

  &:hover {
    background-color: #26c6da;
    -webkit-transition: background-color 0.3s ease-out;
    -moz-transition: background-color 0.3s ease-out;
    -o-transition: background-color 0.3s ease-out;
    transition: background-color 0.3s ease-out;
    cursor: pointer;
  }
`;

export const Error = styled.div`
    background-color: red;
    color: white;
    padding: 1rem;
    width: 100%;
    text-align: center;
    margin-bottom: 2rem;
`;
