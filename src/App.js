import "./App.css";
import Navbar from "./components/NavBar/Navbar";
import { useState, useEffect } from "react";
import NFTMintForm from "./components/NFTMintForm/NFTMintForm";

function App() {
  return (
    <div
      style={{
        height: "100vh",
      }}
    >
      <Navbar />
      <div className={"main-container"}>
        <div className={'gradient-underlay'} />
        <NFTMintForm />
      </div>
    </div>
  );
}

export default App;
