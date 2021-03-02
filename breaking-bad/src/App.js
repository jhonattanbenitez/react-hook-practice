import React, {useState, useEffect} from "react";
import { Button } from "./components/button/button.styled";
import { Container } from "./components/container/container.styled";
import Quote from './components/quote/quote.component.jsx';

function App() {

  //state de frases
  const [quote, setQuote] = useState({});

   
 const consultarAPI = async () =>{
   const api = await fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes');
   const frase = await api.json()
   setQuote(frase[0]);
 }

 // Cargar frase 
 useEffect(() => {
   consultarAPI()
  }, [])


  return (
    <Container>
      <Quote  quote={quote}/>
      <Button
        onClick={() => consultarAPI()}
      >Get quote</Button>
    </Container>
  );
}

export default App;
