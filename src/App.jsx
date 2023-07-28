import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProfileBox from "./components/ProfileBox";
import Home from "./components/home/index";
import Layout from "./components/layout/index";

import data1 from "./data/0724714f-947b-6cab-ee85-b0de7a9ad3f7";


function App() {
  console.log('data1::', data1);
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
