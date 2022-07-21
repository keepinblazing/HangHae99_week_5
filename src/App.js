import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Header";
import Mainpage from "./pages/MainPage";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Write from "./pages/Write";
import Detailpage from "./pages/Detailpage";


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
          <Route path="/Detail/:index" element={<Detailpage/>}/>
          {/* <Route path="/Detail/:index/modify" element={<Modify/>}/> */}
        </Routes>
      </div>
    </>
  );
}

export default App;
