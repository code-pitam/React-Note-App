import "./App.css";
import State from "./component/usestate";
import React, { useState } from "react";
import SecondState from "./component/secndState";
function App() {
  const [ gfrout, setgfrout ] = useState("");

  function getthefrout(frout) {
    // setgfrout(frout);
    console.log(frout);
    setgfrout(frout)
  }
  return (
    <>
      
    
      <State getdata={getthefrout} />
      <SecondState name={gfrout}/>
    </>

  );
}

export default App;
