import TypewriterKey from "./components/TypewriterKey";
import Page from "./components/Page";
//import KeyWatcher from "./components/KeyWatcher";
import './css_prod/mainstyle.css';

export default function App() {
  
  const keyHandler = (operation) => {

  }

  return (
    <div className="typewriterapp"> 
      <Page/>
      <TypewriterKey majorKey={"a"} minorKey={"A"} />
    </div>
  )
}
