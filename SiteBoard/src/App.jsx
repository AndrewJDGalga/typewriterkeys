import TypewriterKey from "./components/TypewriterKey";
import Page from "./components/Page";
//import KeyWatcher from "./components/KeyWatcher";
import './css_prod/mainstyle.css';
import { useState } from "react";

export default function App() {
  const keyHandler = (operationKey) => {
    console.log(operationKey);
  }

  const [key, SetKey] = useState(<TypewriterKey majorKey={"a"} minorKey={"A"} passKeyUp={keyHandler}/>);
  
  function keyPressed(key) {
    console.log(key);
  }

  return (
    <main onMouseDown={keyPressed} onKeyDown={keyPressed} tabIndex='-1' className="typewriterapp" > 
      <Page />
      {key}
    </main>
  )
}
