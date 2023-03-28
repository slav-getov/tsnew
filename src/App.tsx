import { useState } from "react";
import { Greet } from "./components/greet/greet";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Greet name="Slav" />
    </div>
  );
}

export default App;
