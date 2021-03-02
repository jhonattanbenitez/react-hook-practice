import styled from 'styled-components';

export const Button = styled.button`
    background: -webkit-linear-gradient(top left, #007d35 0%, #007d35 40%, #0f574e 100%);
    background-size: 300px;
    font-family: Arial, Helvetica, sans-serif;
    color: #FFF;
    margin-top: 1rem;
    padding: 1rem 3rem;
    font-size: 2rem;
    border: 2px solid black;
    text-transform: uppercase;
    transition: background-size  .3s ease;
    
    :hover{
        cursor: pointer;
        background-size: 400px;
    }
`;


