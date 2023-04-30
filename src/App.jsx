import React from "react";
import Topbar from "./Components/Topbar/Topbar";
import { routesElement } from "./routes";
import { useRoutes } from "react-router-dom";
import Sidebar from "./Components/Sidebar/Sidebar";
export default function App() {
  let routes = useRoutes(routesElement);
  return (
    <div>
      <Topbar />
      <div className="flex gap-2">
        <Sidebar />

        {routes}
      </div>
    </div>
  );
}
