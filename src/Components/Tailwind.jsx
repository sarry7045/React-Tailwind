import React, { useState, useContext } from "react";
import { Firstname, Lastname } from "../App";
// import "./input.css"
import CovidLive from "./CovidLive";
import Netflix from "./Netflix";
import Sdata from "./Sdata";
import { useNavigate } from "react-router-dom";

const Tailwind = () => {
  const [num, setNum] = useState();
  const Fname = useContext(Firstname);
  const Lname = useContext(Lastname);
  const currDate = new Date().getHours();
  const currTime = new Date().toLocaleTimeString();

  const naviGate = useNavigate();

  let greeting = "";

  if (currDate >= 1 && currDate < 12) {
    greeting = "Good Morning";
  } else if (currDate >= 12 && currDate < 19) {
    greeting = "Good AfterNoon";
  } else {
    greeting = " Good Night";
  }

  let newTime = new Date().toLocaleTimeString();
  const [cTime, setCTime] = useState(newTime);

  const UpdateTime = () => {
    newTime = new Date().toLocaleTimeString();
    setCTime(cTime);
  };
  setInterval(UpdateTime, 500);

  const orange = "#c3e7fd";
  const [bg, setBg] = useState(orange);

  const bgChange = () => {
    let gray = "#b7e2fc";
    setBg(gray);
  };

  return (
    <>
      {/* <nav className=" bg-purple-600 text-white flex justify-between py-4 ">
        <span className="text-xl flex items-center mx-4 font-bold ">
          Tailwind Practice
        </span>
        <ul className="flex mx-2 px-40 space-x-9">
          <li className="mx-4 cursor-pointer">Home</li>
          <li className="mx-4  cursor-pointer">About</li>
          <li className="mx-4  cursor-pointer">Servives</li>
          <li className="mx-4  cursor-pointer">Team</li>
          <li className="mx-4  cursor-pointer">Contact</li>
        </ul>
      </nav> */}
      <main>
        <div style={{ backgroundColor: bg }} className="main bg-gray-200 h-96">
          <div className="text-3xl text-center py-6">
            <h5>Hello "{greeting}" Welcome to the Tailwind Tutorial</h5>
          </div>
          <div className="text-center">
            <h1 className="py-4 text-2xl">{cTime}</h1>
            <button
              onClick={bgChange}
              className="bg-purple-800  text-white px-3 py-2 rounded-xl  hover:bg-purple-600"
            >
              Click For BG Change
            </button>
            <button
              onClick={() => naviGate("facebookclone")}
              className="bg-purple-800  text-white px-3 py-2 rounded-xl mx-4  hover:bg-purple-600"
            >
              UseNavigate
            </button>
          </div>
        </div>
      </main>
      {/* <h2>{Fname}  {Lname} {num}</h2>
      <select value={num} onChange={(event)=>{ setNum(event.target.value)}}><option>1</option>
        <option>2</option>
        <option>3</option></select> */}

      {/*       
      <h1 className="mt-6 text-center capitalize text-3xl pl-6">Cards</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-3 justify-items-center">
        <div className="py-6 mx-2">
          <div className="rounded overflow-hidden shadow-lg max-w-sm">
            <img
              src="https://images.pexels.com/photos/2674052/pexels-photo-2674052.jpeg?cs=srgb&dl=pexels-elena-blessing-2674052.jpg&fm=jpg"
              alt=""
              className="w-full"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Lion</div>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Blanditiis sequi sit voluptatum provident voluptates iure,
                ducimus quis id consectetur. Odit esse omnis exercitationem
                vitae unde beatae hic repellat, eaque laborum.
              </p>
            </div>
            <div className="grid grid-flow-col gap-5 pb-2 px-6">
              <span className="bg-gray-200 rounded px-3 py-1 text-sm  font-base mb-2">
                {" "}
                #Animals
              </span>
              <span className="bg-gray-200 rounded px-3 py-1 text-sm font-base mb-2">
                {" "}
                #Animals
              </span>
              <span className="bg-gray-200 rounded px-3 py-1 text-sm  font-base mb-2">
                {" "}
                #Animals
              </span>
            </div>
          </div>
        </div>
        <div className="py-6 mx-2">
          <div className="rounded overflow-hidden shadow-lg max-w-sm">
            <img
              src="https://images.pexels.com/photos/2674052/pexels-photo-2674052.jpeg?cs=srgb&dl=pexels-elena-blessing-2674052.jpg&fm=jpg"
              alt=""
              className="w-full"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Lion</div>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Blanditiis sequi sit voluptatum provident voluptates iure,
                ducimus quis id consectetur. Odit esse omnis exercitationem
                vitae unde beatae hic repellat, eaque laborum.
              </p>
            </div>
            <div className="grid grid-flow-col gap-5 pb-2 px-6">
              <span className="bg-gray-200 rounded px-3 py-1 text-sm  font-base mb-2">
                {" "}
                #Animals
              </span>
              <span className="bg-gray-200 rounded px-3 py-1 text-sm font-base mb-2">
                {" "}
                #Animals
              </span>
              <span className="bg-gray-200 rounded px-3 py-1 text-sm  font-base mb-2">
                {" "}
                #Animals
              </span>
            </div>
          </div>
        </div>
        <div className="py-6 mx-2">
          <div className="rounded overflow-hidden shadow-lg max-w-sm">
            <img
              src="https://images.pexels.com/photos/2674052/pexels-photo-2674052.jpeg?cs=srgb&dl=pexels-elena-blessing-2674052.jpg&fm=jpg"
              alt=""
              className="w-full"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Lion</div>
              <p className="text-gray-600 leading-normal">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Blanditiis sequi sit voluptatum provident voluptates iure,
                ducimus quis id consectetur. Odit esse omnis exercitationem
                vitae unde beatae hic repellat, eaque laborum.
              </p>
            </div>
            <div className="grid grid-flow-col gap-5 pb-2 px-6">
              <span className="bg-gray-200 rounded px-3 py-1 text-sm  font-base mb-2">
                {" "}
                #Animals
              </span>
              <span className="bg-gray-200 rounded px-3 py-1 text-sm font-base mb-2">
                {" "}
                #Animals
              </span>
              <span className="bg-gray-200 rounded px-3 py-1 text-sm  font-base mb-2">
                {" "}
                #Animals
              </span>
            </div>
          </div>
        </div>
      </div> */}
      {/* 
      <div
        className="w-full h-screen bg-no-repeat bg-cover bg-fixed"
        style={{
          backgroundImage: `url("https://images.pexels.com/photos/2674052/pexels-photo-2674052.jpeg?cs=srgb&dl=pexels-elena-blessing-2674052.jpg&fm=jpg")`,
        }}
      >
        {" "}
      </div> */}
      <CovidLive />

      <h1 className="mt-6 text-center text-bold text-3xl pl-6 py-6  pb-12 mt-7">
        Cards with Map Method
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-3 justify-items-center">
        {Sdata.map((value) => (
          <Netflix
            imgsrc={value.imgsrcc}
            title={value.title}
            sname={value.sname}
            link={value.link}
          />
        ))}
      </div>
    </>
  );
};

export default Tailwind;
