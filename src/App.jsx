import { RouterProvider } from "react-router-dom";
import router from "./routes/router.jsx";
import "./assets/sass/styles.scss";

function App() {
  return <RouterProvider router={router} />;
}

export default App
