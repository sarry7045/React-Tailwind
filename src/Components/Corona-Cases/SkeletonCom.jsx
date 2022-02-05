import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function SkeletonCom() {
  return (
    <>
      <div className="mx-2">
        <div className="rounded overflow-hidden shadow-xl max-w-sm">
          <div className="px-16 py-4">
            <div className="font-bold text-xl mb-4 mt-3 text-center text-3xl ">
              <h1>
                {" "}
                <Skeleton count={2} width={150} />
              </h1>
            </div>
            <div className="font-bold text-xl mb-3 py-4 text-center text-4xl capitalize text-blue-500">
              <h1>
                <Skeleton count={1} circle={true} height={100} width={100} />
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SkeletonCom;
