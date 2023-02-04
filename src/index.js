import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { Greeting, UserCard } from "./Greeting";
import Product from "./Product";
import { Button } from "./Button";
import { TaskCard } from "./Task";
import { Saludar } from "./Saludar";
import { Posts } from "./Posts";

const root = ReactDOM.createRoot(document.getElementById("root"));
const handleChange = (e) => {
  console.log(e.target.value);
  console.log("Escribiendo en el input");
};

const users = [
  {
    id: 1,
    name: "Martín Zayas",
    image: "https://robohash.org/user1",
  },
  {
    id: 2,
    name: "Teresita Medina2",
    image: "https://robohash.org/user2",
  },
  {
    id: 3,
    name: "Manuel",
    image: "https://robohash.org/user3",
  },
];

/* const users2 = users.map((x)=>{'Hola '+ x.name}) */

root.render(
  <>
    <TaskCard ready={true} />
    <Saludar />
    <Button text="Click me" />

    <input id="hola" onChange={handleChange} />

    <form
      onSubmit={(e) => {
        e.preventDefault();
        console.log("enviando datos del usuario");
      }}
    >
      <h1>Registro de usuarios</h1>
      <button>Send</button>
    </form>

    <Posts />

    {users.map((user, index) => {
      return (
        <div key={index}>
          <h1>{user.name}</h1>
          <img src={user.image}></img>
        </div>
      );
    })}

    <Counter />

    <SaveInput />
  </>
);

function SaveInput() {
  const [mensaje, setMensaje] = useState("");
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log("render");
  }, [counter]);

  return (
    <>
      <input
        onChange={(e) => {
          setMensaje(e.target.value);
        }}
      />
      <button
        onClick={() => {
          alert("El mensaje es: " + mensaje);
        }}
      >
        Save
      </button>
      <hr />
      <h1>Counter: {counter}</h1>
      <button onClick={()=>{setCounter(counter+1)}}>Incrementar</button>
    </>
  );
}

function Counter() {
  const [counter, setCounter] = useState(0);
  console.log(counter);

  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button
        onClick={() => {
          setCounter(counter + 10);
        }}
      >
        Sumar
      </button>
      <button onClick={() => setCounter(counter - 10)}>Restar</button>
      <button onClick={() => setCounter(0)}>Reiniciar</button>
    </div>
  );
}
