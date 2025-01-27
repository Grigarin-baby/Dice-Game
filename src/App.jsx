import Home from "./Pages/Home";
import Menu from "./Pages/Menu";
import { createBrowserRouter,RouterProvider } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <Menu /> },
    { path: "/Home", element: <Home /> },
  ]);
  return <> <RouterProvider  router={router}/></>;
}

export default App;
