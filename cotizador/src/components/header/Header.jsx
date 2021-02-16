import React from "react";
import { ContenedorHeader, TexToHeader } from './header.styles';
import PropTypes from 'prop-types';

const Header = ({ titulo }) => {
  return (
    <ContenedorHeader>
      <TexToHeader>{titulo}</TexToHeader>
    </ContenedorHeader>
  );
};

Header.propTypes = {
  titulo: PropTypes.string.isRequired
}
export default Header;


