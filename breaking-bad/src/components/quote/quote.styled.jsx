import styled from 'styled-components';

const QuoteContainer = styled.div`
padding: 3mm;
border-radius: .5rem;
background-color: white;
margin-top: 10rem;
@media (min-width: 992px){
    margin-top: 10rem;
}
max-width: 800px;
h1{
    font-family: Arial, Helvetica, sans-serif;
    text-align: center;
    position: relative;
    padding-left: 4rem;
    &::before{
        content: open-quote;
        font-size: 10rem;
        position: absolute;
        left: -1rem;
        top: -2rem;

    }

}
p{
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 1.4rem;
    text-align: right;
    font-weight: bold;
    color: #666;
    margin-top: 2rem;

}
`;

export default QuoteContainer;
