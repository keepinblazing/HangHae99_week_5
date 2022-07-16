import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Header";
import Mainpage from "./MainPage";
import Signup from "./Signup";
import Login from "./Login";
import Write from "./Write";

function App() {
  

  return (
    <>
      <Header />
      <div>
        <Routes>
          <Route path="/" element={<Mainpage />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Write" element={<Write />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
