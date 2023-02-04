export function Greeting({ title, name = "User" }) {
  return (
    <h1>
      {title}, dice {name}
    </h1>
  );
}

export function UserCard(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <p>💰{props.amount}</p>
      <p>{props.married ? "Married" : "Single"}</p>
      <ul>
        <li>{props.address.street}</li>
        <li>{props.address.city}</li>
      </ul>
    </div>
  );
}
