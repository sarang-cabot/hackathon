import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProfileBox from "./components/ProfileBox";
import Home from "./components/home/index";
import Layout from "./components/layout/index";
import PatientList from "./components/PatientList";
import Vital from "./components/Vital";
import Splashscreen from "./components/Splashscreen";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/profile" element={<ProfileBox />} />
          <Route path="/PatientList" element={<PatientList />} />
          <Route path="/Vital" element={<Vital />} />
          <Route path="/Welcome" element={<Splashscreen />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
