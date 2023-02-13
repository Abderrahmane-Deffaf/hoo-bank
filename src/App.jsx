import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Navbar from "./components/navBar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Product from "./components/Product";
import ProductTwo from "./components/ProductTwo";
import Clients from "./components/Clients";
import Clientstwo from "./components/Clientstwo";
import Tray from "./components/Tray";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="bg-primary flex flex-col gap-5">
      <Navbar />
      <Hero />
      <Features />
      <Product />
      <ProductTwo />
      <Clients />
      <Clientstwo />
      <Tray />
      <Footer />
    </div>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<App />);
