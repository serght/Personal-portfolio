import React from "react";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import { ThemeProvider } from './../context/ThemeContext';

export default function App() {
  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}