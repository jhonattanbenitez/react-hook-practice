import styled from "styled-components";

export const Contenedor = styled.div`
  max-width: 900px;
  margin: 0 auto;
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`;

export const Heading = styled.h1`
  @import url("https://fonts.googleapis.com/css2?family=Inter&display=swap");
  font-family: "Inter", sans-serif;
  color: #fff;
  text-align: left;
  font-weight: 700;
  font-size: 50px;
  margin-bottom: 50px;
  margin-top: 80px;
  text-transform: uppercase;
  ::after {
    content: "";
    width: 100px;
    height: 6px;
    background-color: #66a2fe;
    display: block;
  }
`;

export const Imagen = styled.img`
  max-width: 100%;
  margin-top: 5rem;
`;
