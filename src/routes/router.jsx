import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Logement from "../pages/Logement";
import NotFound from "../pages/NotFound";
import Layout from "../components/Layout";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            { path: "/", element: <Home /> },
            { path: "/about", element: <About /> },
            { path: "/logement/:id", element: <Logement /> },
            { path: "*", element: <NotFound /> },
        ],
    },
]);

export default router;