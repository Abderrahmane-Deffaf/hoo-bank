import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Navbar from "./components/navBar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Product from "./components/Product";
import ProductTwo from "./components/ProductTwo";

const App = () => {
  return (
    <div className="bg-primary">
      <Navbar />
      <Hero />
      <Features />
      <Product />
      <ProductTwo />
    </div>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<App />);
