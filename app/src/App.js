import './App.css';
import {useEffect, useRef, useState} from "react";

function App() {

  const [name, setName] = useState("");

  const renderCount = useRef(0);

  // const [renderCount, setRenderCount] = useState(0);
  // Infinite loop!
  // useEffect(() => {
  //     // setter will cause the page to rerender
  //     setRenderCount(prev => prev + 1);
  // });

  useEffect(() => {
    // useRef will not cause the page to rerender
    renderCount.current = renderCount.current + 1;
  });

  const inputRef = useRef();

  function autoComplete() {
    // This will update the input value,
    // but it won't update the state
    // and won't rerender!
    inputRef.current.value = "Default Value";
  }

  // Wouldn't work, since it would store
  // the same value as the name does
  // const [prevName, setPrevName] = useState("");
  //
  // useEffect(() => {
  //     setPrevName(name);
  // }, [name]);

  const prevName = useRef("");

  useEffect(() => {
    console.log(name);
    // This update prevName to the current name,
    // but doesn't rerender, so the name
    // before that is shown
    prevName.current = name;
  }, [name]);

  return (
      <div className="App">
        <div className="page">
          <input ref={inputRef} value={name} onChange={(e) => setName(e.target.value)}/>
          <h1>My name is {name} and it used to be {prevName.current}</h1>
          <button onClick={autoComplete}>Auto Complete</button>
          <h2>Rendered {renderCount.current} times</h2>
        </div>
      </div>
  );
}

export default App;
