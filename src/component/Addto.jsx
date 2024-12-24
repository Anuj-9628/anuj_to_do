import React, { useState } from "react";
import { IoIosAddCircle } from "react-icons/io";
function Addto({ onNewItem }) {
  const [todoName, setTodoName] = useState("");
  const [dueDate, setdueDate] = useState("");

  const handleNameChange = (event) => {
    setTodoName(event.target.value);
  };

  const handleNameDate = (event) => {
    setdueDate(event.target.value);
  };

  const handelAddButtonClicked = () => {
    onNewItem(todoName, dueDate);
    setTodoName("");
    setdueDate("");
  };

  return (
    <div className="row  kg-row">
      <div className="col-6">
        <input
          type="text"
          placeholder="Enter To-Do Here"
          onChange={handleNameChange}
          value={todoName}
        />
      </div>
      <div className="col-4">
        <input type="date" onChange={handleNameDate} value={dueDate} />
      </div>
      <div className="col-2">
        <button
          type="button"
          className="btn btn-success kg-button"
          onClick={handelAddButtonClicked}
        >
        <IoIosAddCircle />
        </button>
     
      </div>
    </div>
  );
}
export default Addto;
