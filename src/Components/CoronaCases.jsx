import React, { useState, useEffect } from "react";

function CoronaCases() {
  const [data, setdata] = useState([]);
  const getCoronaCases = async () => {
    const res = await fetch("https://data.covid19india.org/data.json");
    const data = await res.json();
    console.log(data.statewise);
    setdata(data.statewise);
  };

  useEffect(() => {
    getCoronaCases();
  }, []);
  return (
    <>
      <div class="bg-gray-50 min-h-screen">
        <div>
          <div class="p-4">
            <div class="bg-white p-4 rounded-md">
              <div>
                <h2 class="mb-4 text-xl font-bold text-gray-700">
                  Corona Cases
                </h2>
                <div>
                  <div>
                    <div class="flex justify-between bg-gradient-to-tr from-indigo-600 to-purple-600 rounded-md py-2 px-4 text-white font-bold text-md">
                      <div>
                        <span>State</span>
                      </div>
                      <div>
                        <span>Confirmed</span>
                      </div>
                      <div>
                        <span>Recovered</span>
                      </div>
                      <div>
                        <span>Deaths</span>
                      </div>
                      <div>
                        <span>Active</span>
                      </div>
                      <div>
                        <span>Updated</span>
                      </div>
                    </div>

                    {data.map((value) => {
                      return (
                        <div>
                          <div class="flex justify-between border-t text-sm font-normal mt-4 space-x-4">
                            <div class="px-2 flex">
                              <span>{value.state}</span>
                            </div>
                            <div>
                              <span>{value.confirmed}</span>
                            </div>
                            <div class="px-2">
                              <span>{value.recovered}</span>
                            </div>
                            <div class="px-2">
                              <span>{value.deaths}</span>
                            </div>
                            <div class="px-2">
                              <span>{value.lastupdatedtime}</span>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CoronaCases;
