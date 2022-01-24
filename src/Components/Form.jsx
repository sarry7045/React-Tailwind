import React, { useState } from "react";

const Form = () => {
  const [name, setName] = useState({
    Fname: "",
    Lname: "",
    email: "",
    phone: "",
  });

  const EventChange = (event) => {
    console.log(event.target.value);

    // const value = event.target.value;
    // const name = event.target.name;

    const { value, name } = event.target;

    setName((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
      // if (name === "Fname") {
      //   return {
      //     Fname: value,
      //     Lname: preValue.Lname,
      //     email: preValue.email,
      //     phone: preValue.phone,
      //   };
      // } else if (name === "Lname") {
      //   return {
      //     Fname: preValue.Fname,
      //     Lname: value,
      //     email: preValue.email,
      //     phone: preValue.phone,
      //   };
      // } else if (name === "email") {
      //   return {
      //     Fname: preValue.Fname,
      //     Lname: preValue.Lname,
      //     email: value,
      //     phone: preValue.phone,
      //   };
      // } else if (name === "phone") {
      //   return {
      //     Fname: preValue.Fname,
      //     Lname: preValue.Lname,
      //     email: preValue.email,
      //     phone: value,
      //   };
      // }
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    alert("Form Submitted");
  };

  //   const changeContent = () => {
  //     document.getElementById("apiform").innerHTML="<iframe></iframe>"
  // }

  return (
    <>
      <h1 className="mt-6 text-center text-bold text-3xl pl-6 py-6 pb-12">
        React Form
      </h1>

      <div className="container-fluid justify-items-center text-center">
        <form onSubmit={onSubmit}>
          <h1 className="mt-4 text-center justify-center text-bold text-4xl">
            Hello {name.Fname}
            {name.Lname} {name.email} {name.phone}
          </h1>
          <div className="container-fluid text-center justify-center mx-96 ">
            <input
              onChange={EventChange}
              type="text"
              name="Fname"
              value={name.Fname}
              class="text-center justify-center appearance-none  block w-full bg-gray-200 text-gray-700 border w-96 border-gray-200 rounded py-3 mb-10 mt-10 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              placeholder="Type Your Name"
            />
          </div>
          <div className="container-fluid text-center justify-center mx-96 ">
            <input
              onChange={EventChange}
              type="text"
              name="Lname"
              value={name.Lname}
              class="text-center justify-center appearance-none  block w-full bg-gray-200 text-gray-700 border w-96 border-gray-200 rounded py-3 mb-10 mt-10 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              placeholder="Type Your Last Name"
            />
          </div>
          <div className="container-fluid text-center justify-center mx-96 ">
            <input
              onChange={EventChange}
              type="email"
              name="email"
              value={name.email}
              class="text-center justify-center appearance-none  block w-full bg-gray-200 text-gray-700 border w-96 border-gray-200 rounded py-3 mb-10 mt-10 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              placeholder="Type Your Email"
            />
          </div>
          <div className="container-fluid text-center justify-center mx-96 ">
            <input
              onChange={EventChange}
              type="number"
              name="phone"
              value={name.phone}
              class="text-center justify-center appearance-none  block w-full bg-gray-200 text-gray-700 border w-96 border-gray-200 rounded py-3 mb-10 mt-10 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              placeholder="Type Phone Number"
            />
          </div>{" "}
          <button
            type="submit"
            className="text-center justify-center bg-purple-800  text-white px-3 py-2 rounded-xl mx-4  hover:bg-purple-600 mb-10 mt-2 "
          >
            Click Me For Update The Data
          </button>
        </form>
      </div>
      {/* 
      <div id="apiform">
        <button onClick={changeContent}></button>
      </div> */}
    </>
  );
};

export default Form;
