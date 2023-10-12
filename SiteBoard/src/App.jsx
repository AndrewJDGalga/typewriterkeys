import TypewriterKey from "./components/TypewriterKey";
import Page from "./components/Page";
import KeyWatcher from "./components/KeyWatcher";
import './css_prod/mainstyle.css';

export default function App() {
  return (
    <div className="typewriterapp"> 
      <Page/>
      <KeyWatcher/>
      <TypewriterKey majorKey={"a"} minorKey={"A"} />
    </div>
  )
}
