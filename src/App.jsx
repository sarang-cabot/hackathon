import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProfileBox from "./components/ProfileBox";
import Home from "./components/home/index";
import Layout from "./components/layout/index";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/profile" element={<ProfileBox />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
