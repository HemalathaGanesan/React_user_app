import ForwardCounter from "./Components/ForwardCounter";
import BackwardCounter from "./Components/BackwardCounter";
import "./Components/counter.css";
import { Fragment } from "react";

function App() {
  return (
    <Fragment>
      <div className='counter'>
        <ForwardCounter />
      </div>
      <div className='counter'>
        <BackwardCounter />
      </div>
    </Fragment>
  );
}

export default App;
