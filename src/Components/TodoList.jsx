import React, { useState } from "react";
// import Button from "@material-ui/core/Button";
// import Tooltip from "@material-ui/core/Tooltip";

const TodoList = () => {
  const [inputList, setInputList] = useState();
  const [items, setItems] = useState([]);

  const EventChange = (event) => {
    setInputList(event.target.value);
  };

  const listOfItems = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList];
    });
    setInputList();
  };
  return (
    <>
      <h1 className="mt-6 text-center text-bold text-3xl pl-6 py-6 pb-12">
        React Todo-List
      </h1>

      <div className="container-fluid justify-items-center text-center">
        <form>
          <div className="mt-4 text-center justify-center text-bold text-4xl">
            <ol>
              {/* <li>{ inputList}</li> */}
              {items.map((itemValue, index) => {
                return (
                  <li key={index} id={index}>
                    {" "}
                    {itemValue}
                  </li>
                );
              })}
            </ol>
          </div>
          <div className="container-fluid text-center justify-center mx-96 ">
            <input
              onChange={EventChange}
              type="text"
              name="Fname"
              value={inputList}
              class="text-center justify-center appearance-none  block w-full bg-gray-200 text-gray-700 border w-96 border-gray-200 rounded py-3 mb-10 mt-10 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              placeholder="Add Your Items"
            />
          </div>
          <div className="mt-5 mb-5 text-center">
            {/* <Tooltip title="button">
              <Button
                onClick={listOfItems}
                color="blue"
                className="mt-5 mb-5"
                type="submit"
                variant="contained"
              >
                Add Items
              </Button>
            </Tooltip> */}
          </div>
        </form>
      </div>
    </>
  );
};

export default TodoList;
