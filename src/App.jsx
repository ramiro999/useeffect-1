import { useState } from "react";

const App = () => {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <h1>UseEffect</h1>

      <button onClick={() => setCounter(counter + 1)}>Counter + 1</button>
    </>
  );
};

export default App;
