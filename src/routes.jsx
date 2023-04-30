import Home from "./Pages/Home/Home";
import NewUsers from "./Pages/NewUsers/NewUsers";
import Products from "./Pages/Products/Products";
import Product from "./Pages/Product/Product";
import Users from "./Pages/Users/Users";

export let routesElement = [
  { path: "/", element: <Home /> },
  { path: "/users", element: <Users /> },
  { path: "/products", element: <Products /> },
  { path: "/product/:productID", element: <Product /> },
  { path: "/newusers", element: <NewUsers /> },
];
