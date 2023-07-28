import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProfileBox from "./components/ProfileBox";
import Home from "./components/home/index";
import Layout from "./components/layout/index";
import PatientList from "./components/PatientList";
import Vital from "./components/Vital";
function App() {
  console.log("data1::", getPatientList());
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/profile" element={<ProfileBox />} />
          <Route path="/PatientList" element={<PatientList />} />
          <Route path="/Vital" element={<PatientList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
