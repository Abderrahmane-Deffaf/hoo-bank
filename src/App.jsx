import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Navbar from "./components/navBar";
import Hero from "./components/Hero";

const App = () => {
  return (
    <div className="bg-primary">
      <Navbar />
      <Hero />
    </div>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<App />);
