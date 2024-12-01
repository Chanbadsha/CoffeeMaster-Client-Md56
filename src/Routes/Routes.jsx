import { createBrowserRouter } from "react-router-dom";

import AdminLayout from "../Layout/AdminLayout";
import AdminHome from "../Pages/AdminHome";
import AddCoffee from "../Pages/AddCoffee";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AdminLayout></AdminLayout>,
    children: [
      {
        path: "/",
        element: <AdminHome></AdminHome>,
        loader: () => fetch("http://localhost:5000/coffees"),
      },
      {
        path: "/admin/addcoffeedetail",
        element: <AddCoffee></AddCoffee>,
      },
      {
        path: "/admin/updatecoffeedetail",
        element: <AddCoffee></AddCoffee>,
      },
    ],
  },
]);

export default router;
