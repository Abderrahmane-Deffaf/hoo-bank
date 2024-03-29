import React from "react";
import { createRoot } from "react-dom/client";
import Navbar from "./components/Navbar";
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
    <div className="flex flex-col gap-5 bg-primary md:gap-[4rem]">
      <div className="m-auto flex max-w-[74rem] flex-col">
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
    </div>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<App />);
