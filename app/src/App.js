import './App.css';
import {useEffect, useMemo, useState} from "react";

function double(number) {
    // Imitating some time-consuming activity
    for (let i = 0; i < Math.pow(10, 9); i++) {}
    return 2 * number;
}

function App() {

  const [number, setNumber] = useState(0);
  const doubled = useMemo(() => double(number), [number]);

  const [dark, setDark] = useState(false);

  // If not using useMemo here,
  // useEffect below will run
  // every time component renders,
  // because of referential equality
  const styles = useMemo(() => {
      return {
          color: dark ? "white" : "black",
          backgroundColor: dark ? "black" : "white",
          border: "1px solid black",
          padding: "10px",
      }
  }, [dark]);

  useEffect(() => console.log("styles changed"), [styles]);

  return (
    <div className="App">
      <input value={number} onChange={e => setNumber(e.target.value)} style={styles} />
      <p style={styles}>{doubled}</p>
      <button style={styles} onClick={() => setDark(prev => !prev)}>Change Theme</button>
    </div>
  );
}

export default App;
