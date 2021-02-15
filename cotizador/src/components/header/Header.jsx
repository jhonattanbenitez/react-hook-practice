import React from "react";
import { ContenedorHeader, TexToHeader } from './header.styles';


const Header = ({ titulo }) => {
  return (
    <ContenedorHeader>
      <TexToHeader>{titulo}</TexToHeader>
    </ContenedorHeader>
  );
};

export default Header;
