import { useState } from "react";
import "./App.css";
import Dashboard from "./pages/Dashboard";
import { Toaster } from "react-hot-toast";
function App() {
  return (
    <>
      <Dashboard />
      <Toaster />
    </>
  );
}

export default App;
