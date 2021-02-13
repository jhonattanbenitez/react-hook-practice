import React from "react";
import styled from "@emotion/styled";

const ContenedorHeader = styled.header`
  background-color: #26c6da;
  padding: 1rem;
  margin-top: 3rem;
  font-weight: bold;
  color: #fff;
  border-radius: 5px;
`;

const TexToHeader = styled.h1`
  font-size: 2rem;
  margin: 0;
  text-align: center;
`;

const Header = ({ titulo }) => {
  return (
    <ContenedorHeader>
      <TexToHeader>{titulo}</TexToHeader>
    </ContenedorHeader>
  );
};

export default Header;
