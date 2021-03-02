import React from 'react';
import QuoteContainer from './quote.styled';

const Quote = ({quote}) => {

    if(Object.keys(quote).lenght === 0) return null;
    return ( 
        <QuoteContainer>
            <h1>{quote.quote}</h1>
            <p>{quote.author}</p>
        </QuoteContainer>
    );
}
 
export default Quote;