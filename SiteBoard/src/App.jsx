import { useState } from "react";
import TypewriterKeyboard from "./components/TypewriterKeyboard";
import Page from "./components/Page";
import './css_prod/mainstyle.css';

export default function App() {

  return (
    <main className="typewriterapp">
      <Page />
      <TypewriterKeyboard />
    </main>
  )

  /*
  return (
    <main onMouseDown={mouseDown} onKeyDown={keyPressed} onKeyUp={keyReleased} tabIndex='-1' className="typewriterapp" > 
      <Page />
      <TypewriterKeyboard />
    </main>
  )*/
}
