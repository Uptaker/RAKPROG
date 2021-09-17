import './App.css';
import Greeting from './components/Greeting';
import { useState } from "react";
import Fun from './components/Fun'

function App() {
  const [ magicNumber, setMagicNumber ] = useState(0)
  const [show, setShow] = useState(true)
  return (

    <div className="App">
      {show && <h1>{magicNumber}</h1>}
      <Greeting age="21" name="Markus"/>
      <Fun 
        setMagicNumber={setMagicNumber} 
        magicNumber={magicNumber}
        show={show}
        setShow={setShow}
      />
      <Fun 
        setMagicNumber={setMagicNumber} 
        magicNumber={magicNumber} 
        amount={5}
        show={show}
        setShow={setShow}
      />
      <Fun 
        setMagicNumber={setMagicNumber} 
        magicNumber={magicNumber} 
        amount={25}
        show={show}
        setShow={setShow}
      />
    </div>
  );
}

export default App;
