import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home";
import AddProduct from "../Pages/AddProduct";
import UpdateProduct from "../Pages/UpdateProduct";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/add-product",
        element: <AddProduct />,
      },
      {
        path: "/update-product",
        element: <UpdateProduct />,
      },
    ],
  },
]);

export default router;
