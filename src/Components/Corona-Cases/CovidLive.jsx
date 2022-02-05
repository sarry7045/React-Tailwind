import React, { useEffect, useState } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import SkeletonComponent from "../Corona-Cases/SkeletonCom.jsx"

const CovidLive = () => {
  const [data, setData] = useState([]);

  const [isLoading, setIsLoading] = useState(true);
  const getCovidData = async () => {
    try {
      const res = await fetch("https://data.covid19india.org/data.json");
      const covidData = await res.json();
      console.log(covidData.statewise[0]);
      setData(covidData.statewise[0]);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    setTimeout(() => {
      getCovidData();
      setIsLoading(false);
    }, 2000);
  }, []);
  return (
    <>
      <h1 className="mt-6 text-center text-bold text-3xl pl-6 pb-12">
        Corona Cases Live Tracker
      </h1>
      {isLoading ? (
        <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-3 justify-items-center">
          <SkeletonComponent />
          <SkeletonComponent />
          <SkeletonComponent />
          <SkeletonComponent />
          <SkeletonComponent />
          <SkeletonComponent />
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-3 justify-items-center">
            <div className="mx-2">
              <div className="rounded overflow-hidden shadow-xl max-w-sm">
                <div className="px-16 py-4">
                  <div className="font-bold text-xl mb-4 mt-3 text-center text-3xl ">
                    COUNTRY
                  </div>
                  <div className="font-bold text-xl mb-3 py-4 text-center text-4xl capitalize text-blue-500">
                    INDIA
                  </div>
                </div>
              </div>
            </div>
            <div className=" mx-2">
              <div className="rounded overflow-hidden shadow-xl max-w-sm">
                <div className="px-16 py-4">
                  <div className="font-bold text-xl mb-4 mt-3 text-center text-3xl ">
                    RECOVERED
                  </div>
                  <div className="font-bold text-xl mb-3 py-4 text-center text-4xl capitalize text-blue-500">
                    {data.recovered}
                  </div>
                </div>
              </div>
            </div>
            <div className=" mx-2">
              <div className="rounded overflow-hidden shadow-xl max-w-sm">
                <div className="px-16 py-4">
                  <div className="font-bold text-xl mb-4 mt-3 text-center text-3xl ">
                    CONFIRMED
                  </div>
                  <div className="font-bold text-xl mb-3 py-4 text-center text-4xl capitalize text-blue-500">
                    {data.confirmed}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-3 justify-items-center">
            <div className="mx-2">
              <div className="rounded overflow-hidden shadow-xl max-w-sm">
                <div className="px-16 py-4">
                  <div className="font-bold text-xl mb-4 mt-3 text-center text-3xl ">
                    DEATH
                  </div>
                  <div className="font-bold text-xl mb-3 py-4 text-center text-4xl capitalize text-blue-500">
                    {data.deaths}
                  </div>
                </div>
              </div>
            </div>
            <div className=" mx-2">
              <div className="rounded overflow-hidden shadow-xl max-w-sm">
                <div className="px-16 py-4">
                  <div className="font-bold text-xl mb-4 mt-3 text-center text-3xl ">
                    ACTIVE
                  </div>
                  <div className="font-bold text-xl mb-3 py-4 text-center text-4xl capitalize text-blue-500">
                    {data.active}
                  </div>
                </div>
              </div>
            </div>
            <div className=" mx-2">
              <div className="rounded overflow-hidden shadow-xl max-w-sm">
                <div className="px-16 py-4">
                  <div className="font-bold text-xl mb-4 mt-3 text-center text-3xl ">
                    UPDATED
                  </div>
                  <div className="font-bold text-xl mb-3 py-4 text-center text-4xl capitalize text-blue-500">
                    {data.lastupdatedtime}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      {/*       
        <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-3 justify-items-center">
          <div className=" mx-2">
            <div className="rounded overflow-hidden shadow-xl max-w-sm">
              <div className="px-16 py-4">
                <div className="font-bold text-xl mb-4 mt-3 text-center text-3xl ">
                  RECOVERED
                </div>
                <div className="font-bold text-xl mb-3 py-4 text-center text-4xl capitalize text-blue-500">
                  {data.recovered}
                </div>
              </div>
            </div>
          </div>
        </div> */}
    </>
  );
};

export default CovidLive;
