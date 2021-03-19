import styled from "styled-components";

export const Contenedor = styled.div`
  max-width: 90vw;
  margin: 0 auto;
  margin-top: 5rem;
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 1rem;
  }
`;

export const Heading = styled.h1`
 @import url("https://fonts.googleapis.com/css2?family=Fira+Code&display=swap");
  font-family: "Fira Code", monospace;
  color: #fff;
  text-align: left;
  font-weight: 700;
  font-size: 50px;
  text-transform: uppercase;
  ::after {
    content: "";
    width: 70%;
    height: 6px;
    background-color: #66a2fe;
    display: block;
  }
`;

