import React, { useState } from "react";

function SearchBar() {
  const [img, setImg] = useState("");

  const image = `https://source.unsplash.com/400x300/?${img}`;

  const inputEvent = (event) => {
    const data = event.target.value;
    setImg(data);
  };
  return (
    <>
      <div class="flex items-center justify-center mt-6 mb-10 ">
        <div class="flex border-2 border-gray-200 rounded">
          <input
            type="text"
            className="px-4 py-2 w-80 border-gray-400 border-1 border rounded-lg outline-blue-600 "
            onChange={inputEvent}
            value={img}
            placeholder="Search Anything...."
          />
          <button class="px-4 text-white bg-gray-600 border-l ">Search</button>
        </div>
        <div>{img === "" ? null : <img className="mx-4" src={image} />}</div>
      </div>
    </>
  );
}

export default SearchBar;
