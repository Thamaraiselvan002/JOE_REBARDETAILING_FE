import { useState } from "react";
import Home from "./Components/Home";
import Services from "./Components/Services";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import '../src/CustomStyles/Animation.css';
import WhyUs from "./Components/WhyUs";

export default function App() {
  const [activePage, setActivePage] = useState("Home");

  const renderPage = () => {
    console.log(activePage,"activepage");
    switch (activePage) {
      
      case "Home":     return <Home setActivePage={setActivePage} />;
      case "Services": return <Services />;
      case "About":    return <About />;
      case "Contact":  return <Contact />;
      case "Why Us":   return <WhyUs />;
      default:         return <Home setActivePage={setActivePage} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-zinc-900">
      <Header activePage={activePage} setActivePage={setActivePage} />
      <main className="flex-1 pt-[73px]">
        {renderPage()}
      </main>
      <Footer setActivePage={setActivePage} />
    </div>
  );
}
