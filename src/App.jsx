import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import { Dashboard, Login } from "./pages";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  const [count, setCount] = useState(0);

  // const router = createBrowserRouter(routes, { basename: import.meta.env.DEV ?
  // '/' : '/react-vite-gh-pages/' })

  const router = createBrowserRouter(
    [
      {
        path: "/dashboard_task",
        element: <Login />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
    ],
    {
      basename: import.meta.env.DEV ? "/dashboard_task" : "/login/",
    }
  );
  return (
    <>
      {" "}
      {/* <RouterProvider router={router} /> */}{" "}
      <BrowserRouter
        basename={import.meta.env.DEV ? "/" : "/dash/"}
      >
        {" "}
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>{" "}
      </BrowserRouter>
      
    </>
  );
}

export default App;
