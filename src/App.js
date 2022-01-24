import Tailwind from "./Components/Tailwind";
import Temporary from "./Components/Temporary";
import React, { createContext, useState, useEffect } from "react";
import FacebookClone from "./Components/FacebookClone";
import MemoryGame from "./Components/MemoryGame";
import Navbar from "./Components/Navbar";
import { Routes, Route } from "react-router-dom";
import PageNotFound from "./Components/PageNotFound";
const Firstname = createContext();
const Lastname = createContext();

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <Firstname.Provider value={"Suraj"}>
              <Lastname.Provider value={"Yadav"}>
                <Tailwind />
              </Lastname.Provider>
            </Firstname.Provider>
          }
        >
          {" "}
        </Route>
        <Route path="/facebookclone" element={<FacebookClone />}>
          {" "}
        </Route>
        <Route path="/memorygame" element={<MemoryGame />}>
          {" "}
        </Route>
        <Route path="/temporary" element={<Temporary />}>
          {" "}
        </Route>
        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>
    </>
  );
}

export default App;
export { Firstname, Lastname };
