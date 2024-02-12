import { useEffect, useState } from "react";

const App = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log("cambio el counter");
  }, []);

  return (
    <>
      <h1>UseEffect</h1>
      <button onClick={() => setCounter(counter + 1)}>
        Counter: {counter}
      </button>
    </>
  );
};

export default App;
