import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ProfileBox from "./components/ProfileBox";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <ProfileBox></ProfileBox>
      </div>
    </>
  );
}

export default App;
