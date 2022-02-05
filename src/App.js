import Temporary from "./Components/Template/Temporary.jsx";
import React, { createContext } from "react";
import FacebookClone from "./Components/Facebook-Clone/FacebookClone.jsx";
import MemoryGame from "./Components/Memory-Game/MemoryGame.jsx";
import Navbar from "./Components/Navbar";
import { Routes, Route } from "react-router-dom";
import PageNotFound from "./Components/PageNotFound";
import Profile from "./Components/Profile";
import { AuthProvider } from "./Components/RouteAuth";
import Login from "./Components/Login";
import ReqAuth from "./Components/ReqAuth";
import MicrosoftClone from "./Components/Microsoft-Clone/MicrosoftClone.jsx";

const LazyHome = React.lazy(() => import("./Components/Home.jsx"));
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
          <Route path="/microsoftclone" element={<MicrosoftClone />}></Route>
          <Route path="*" element={<PageNotFound />}></Route>
        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
export { Firstname, Lastname };
