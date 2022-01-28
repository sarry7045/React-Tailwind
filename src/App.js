import Tailwind from "./Components/Tailwind";
import Temporary from "./Components/Temporary";
import React, { createContext, useState, useEffect } from "react";
import FacebookClone from "./Components/FacebookClone";
import MemoryGame from "./Components/MemoryGame";
import Navbar from "./Components/Navbar";
import { Routes, Route } from "react-router-dom";
import PageNotFound from "./Components/PageNotFound";
import Profile from "./Components/Profile";
import { AuthProvider } from "./Components/RouteAuth";
import Login from "./Components/Login";
import ReqAuth from "./Components/ReqAuth";

const LazyHome = React.lazy(() => import("./Components/Tailwind"));
const Firstname = createContext();
const Lastname = createContext();

function App() {
  return (
    <>
      <AuthProvider>
        {" "}
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <Firstname.Provider value={"Suraj"}>
                <Lastname.Provider value={"Yadav"}>
                  <React.Suspense fallback="Loading...">
                    <LazyHome />
                  </React.Suspense>
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
          <Route
            path="/profile"
            element={
              <ReqAuth>
                <Profile />
              </ReqAuth>
            }
          ></Route>

          <Route path="/login" element={<Login />}></Route>
          {/* <Route path="*" element={<PageNotFound />}></Route> */}
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
export { Firstname, Lastname };
