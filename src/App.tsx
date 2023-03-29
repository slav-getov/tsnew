import { useState } from "react";
import { Greet } from "./components/greet/Greet";
import Person from "./components/people/Person";
import PeopleList from "./components/people/PeopleList";
import Header from "./components/headers/Header";
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
      <Header>Hello there this is a test</Header>
    </div>
  );
}

export default App;
