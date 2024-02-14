import { useCallback, useEffect, useState } from "react";

const App = () => {
  const [counter, setCounter] = useState(0);
  const [users, setUsers] = useState(null);

  const fetchData = useCallback(async () => {
    console.log("fetchData");
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      if (!response.ok) {
        throw "Error al conectar la API";
      }
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.log(error);
      setUsers([]);
    }
  }, []);

  // useEffect(() => {
  //   console.log("useEffect");
  //   fetch("https://jsonplaceholder.typicode.com/users")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setUsers(data);
  //     });
  // }, []);

  useEffect(() => {
    console.log("useEffect");
    fetchData();
  });

  if (!users) return <div>Cargando...</div>;

  return (
    <>
      <h1>UseEffect</h1>
      <button onClick={() => setCounter(counter + 1)}>
        Counter: {counter}
      </button>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  );
};

export default App;
