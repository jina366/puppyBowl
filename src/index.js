import React from "react";
import ReactDOM from "react-dom/client";
import { Main } from "./components";
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Players from "./components/Players";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Main />}/>
      <Route path="players/:id" element={<Players />} />
      
    </>
  )
);

const container = document.getElementById("app");
const root = ReactDOM.createRoot(container);

root.render(<RouterProvider router={router} />);
