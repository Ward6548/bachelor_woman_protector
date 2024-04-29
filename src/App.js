import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home/Home";
import { increment, decrement } from "./store";

const router = createBrowserRouter([
  {
    path: "/dress",
    element: <Home action={increment} />,
  },
  {
    path: "/undress",
    element: <Home action={decrement} />,
  },
  {
    path: "/",
    element: <Home />,
  },
]);

function App () {
    return (
        <React.StrictMode>
            <RouterProvider router={router} />
        </React.StrictMode>
    );
}

export default App;
