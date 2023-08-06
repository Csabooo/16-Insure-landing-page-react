import React from "react";
import "./index.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Attribution from "./components/Attribution";

function App() {
  return (
    <div className="mx-auto w-[415px] xl:w-full">
      <Header />
      <Main />
      <Footer />
      <Attribution />
    </div>
  );
}

export default App;
