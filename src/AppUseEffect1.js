import { useState, useEffect } from "react"

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => {
      setValue((prev) => prev+1);
  };
  const onChange = (event) => {
        setKeyword(event.target.value);
    };

  useEffect(() => {
    console.log("I run only once, CALL the API");
  }, []);

  useEffect(() => {
    console.log(`counter changed: ${counter}`);
  }, [counter]);
  useEffect(() => {
    if (keyword !== "" && keyword.length > 5){
        console.log(`keyword changed: ${keyword}`);
    }
  }, [keyword]);

  console.log("I run all the time");
  return (
      <div>
            <input onChange={onChange} value = {keyword} type="text" placeholder="Search here"/>
            <h1>{counter}</h1>
            <button onClick={onClick}>CLICK</button>
      </div>
  );
}

export default App;
