import { useState } from "react";
import { Greet } from "./components/greet/Greet";
import Person from "./components/people/Person";
import PeopleList from "./components/people/PeopleList";
function App() {
  const [count, setCount] = useState(0);
  const names = [
    { first: "Mike", last: "Stephens" },
    { first: "Mike", last: "Coolidge" },
  ];
  return (
    <div className="App">
      <Greet name="Slav" isLoggedIn={true} count={2} />
      <Person name={{ first: "Mike", last: "Sheffield" }} />
      <PeopleList names={names} />
    </div>
  );
}

export default App;
