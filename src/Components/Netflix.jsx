import React from "react";

const Netflix = (props) => {
  return (
    <>
      {/* <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-3 justify-items-center"> */}

      <div className="py-4 mx-2">
        <div className="rounded overflow-hidden shadow-2xl max-w-sm">
          <img src={props.imgsrc} alt="" className="w-full" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2  text-center py-4">
              {props.sname}{" "}
            </div>
            <p className="text-gray-800 text-center">{props.title}</p>
          </div>
          <div className="text-center mb-6 mt-4">
            <a href={props.link} target="_blank">
              {" "}
              <button className="bg-red-800  text-white px-3 py-2 rounded-xl  hover:bg-purple-600">
                Watch Now
              </button>
            </a>
          </div>
        </div>
      </div>
      {/* </div>  */}
    </>
  );
};

export default Netflix;
