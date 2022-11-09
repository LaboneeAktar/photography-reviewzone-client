import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import Services from "../../Pages/Services/Services";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "/services",
        element: <Services></Services>,
        loader: () =>
          fetch("https://photography-reviewzone-server.vercel.app/allservices"),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
    ],
  },
]);
export default routes;
