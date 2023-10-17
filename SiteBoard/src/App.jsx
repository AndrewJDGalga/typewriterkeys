import TypewriterKey from "./components/TypewriterKey";
import Page from "./components/Page";
//import KeyWatcher from "./components/KeyWatcher";
import './css_prod/mainstyle.css';
import { useState } from "react";

export default function App() {
  const keyHandler = (operationKey) => {
    console.log(operationKey);
  }

  const [keyboard, setKeyBoard] = useState([<TypewriterKey key={1} majorKey={"a"} minorKey={"A"} passKeyUp={keyHandler} pressed={false}/>]);

  function keyPressed(keyPressed) {
    if(keyPressed.key === key.props.majorKey) {
      
    }
  }

  function mouseDown() {

  }

  return (
    <main onMouseDown={mouseDown} onKeyDown={keyPressed} tabIndex='-1' className="typewriterapp" > 
      <Page />
      {keyboard}
    </main>
  )
}
