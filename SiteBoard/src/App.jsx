import { useState } from "react";
import TypewriterKey from "./components/TypewriterKey";
import Page from "./components/Page";
//import KeyWatcher from "./components/KeyWatcher";
import './css_prod/mainstyle.css';
import keyData from "./data/keyData";

export default function App() {
  const [keySrc, setKeySrc] = useState(keyData);

  const keyHandler = (operationKey) => {
    console.log(operationKey);
  }

  const keyBoard = keySrc.map((newKey)=>{
    return <TypewriterKey key={newKey.id} majorKey={newKey.major} minorKey={newKey.minor} passKeyUp={keyHandler} pressed={newKey.pressed}/>
  })

  function keyPressed(keyPressed) {
    setKeySrc((prev)=>{
      return prev.map((someKey)=>{
        return someKey.major === keyPressed.key ? {...someKey, pressed: true } : someKey;
      })
    })
  }

  function keyReleased(keyReleased){
    setKeySrc((prev)=>{
      return prev.map((someKey)=>{
        return someKey.major === keyReleased.key ? {...someKey, pressed: false} : someKey;
      })
    })
  }

  function mouseDown() {

  }

  return (
    <main onMouseDown={mouseDown} onKeyDown={keyPressed} onKeyUp={keyReleased} tabIndex='-1' className="typewriterapp" > 
      <Page />
      {keyBoard}
    </main>
  )
}
