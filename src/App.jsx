import React from 'react';
import TaxApp from './TaxApp';



function App() {
  const num = ("");  
    const options = {  maximumFractionDigits: 2   }   
    const formattedNumber = Intl.NumberFormat("en-US",options).format(num); 

  return <div>{formattedNumber}<TaxApp /></div>;
}

export default App;
