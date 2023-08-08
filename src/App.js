import React from "react";
import "./index.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Attribution from "./components/Attribution";

function App() {
  return (
    <div className="">
      <Header />
      <Main />
      <Footer className="xl:mx-auto" />
      <Attribution />
    </div>
  );
}

export default App;
