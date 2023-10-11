import TypewriterKey from "./components/TypewriterKey";
import Page from "./components/Page";
import './css_prod/mainstyle.css';

export default function App() {
  return (
    <div className="typewriterapp"> 
      <Page/>
      <TypewriterKey majorKey={"a"} minorKey={"A"} />
    </div>
  )
}
