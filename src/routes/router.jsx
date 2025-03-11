import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import House from "../pages/House";
import Error from "../pages/Error";
import Layout from "../components/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/house/:id", element: <House /> },
      { path: "/error", element: <Error /> },
      { path: "*", element: <Error /> },
    ],
  },
]);

export default router;
