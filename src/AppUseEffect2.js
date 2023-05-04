import { useState, useEffect } from "react"

function Hello() { 
    const hiFn = () => {
        console.log("Created!");
        return byFn;
    }
    const byFn = () => { console.log("Destroyed!"); }
    useEffect(hiFn, [])
    return <h1>Hello</h1>;
}

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => {setShowing((prev) => !prev);}
  return (
      <div>
            {showing ? <Hello />: null}
            <button onClick={onClick}>{showing ? "HIDE" : "SHOW"}</button>
      </div>
  );
}

export default App;
