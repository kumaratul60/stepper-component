import Stepper from "./Stepper";
import "./styles.css";

export default function App() {
  const list = [<Dummy1 />, <Dummy2 />, <Dummy3 />, <Dummy4 />];
  return (
    <div className="App">
      <h1>Stepper Component</h1>
      <Stepper list={list} />
    </div>
  );
}

const Dummy1 = ({ onNext, onPrev }) => {
  return (
    <>
      <div>
        Dummy 1
        <div>
          <button onClick={onPrev}>Prev</button>{" "}
          <button onClick={onNext}>Next</button>
        </div>
      </div>
    </>
  );
};

const Dummy2 = ({ onNext, onPrev }) => {
  return (
    <>
      <div>
        Dummy 2
        <div>
          <button onClick={onPrev}>Prev</button>{" "}
          <button onClick={onNext}>Next</button>
        </div>
      </div>
    </>
  );
};

const Dummy3 = ({ onNext, onPrev }) => {
  return (
    <>
      <div>
        Dummy 3
        <div>
          <button onClick={onPrev}>Prev</button>{" "}
          <button onClick={onNext}>Next</button>
        </div>
      </div>
    </>
  );
};
const Dummy4 = ({ onNext, onPrev }) => {
  return (
    <>
      <div>
        Dummy 4
        <div>
          <button onClick={onPrev}>Prev</button>{" "}
          <button onClick={onNext}>Next</button>
        </div>
      </div>
    </>
  );
};
