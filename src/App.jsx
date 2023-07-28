import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProfileBox from "./components/ProfileBox";
import Home from "./components/home/index";

const router = createBrowserRouter([
  {
    path: "/profile",
    element: <ProfileBox/>,
  },
  {
    path: "/",
    element: <Home/>,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
