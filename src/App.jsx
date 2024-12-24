import React, { useState } from "react";
import AppName from "./component/AppName";
import WelcomeMessage from "./component/WelcomeMessage";
import Todoitems from "./component/todoitems";
import Addto from "./component/Addto";
import "./App.css";

function App() {
 
  const [todoItems, settodoItems] = useState([]);
  const handlNewItem = (itemName, itemDueDate) => {
    console.log(`new item added is ${itemName} Date:${itemDueDate}`);
    const newTodoItems = [
      ...todoItems,
      { name: itemName, duedate: itemDueDate },
    ];
    settodoItems(newTodoItems);
  };

  const handleDeleteItem=(todoItemName)=>{
    console.log(`Item Deleted:${todoItemName}`);
    const newTodo=todoItems.filter(item=>item.name!==todoItemName);
    settodoItems(newTodo);

  };

  return (
    <div className="todo-container" style={{ textAlign: "center" }}>
      <AppName />

      <div className="item-container">
        <Addto onNewItem={handlNewItem} />
        {todoItems.length ===0 && <WelcomeMessage></WelcomeMessage>}
        <Todoitems todoItems={todoItems} onDeleteClick={handleDeleteItem} ></Todoitems>
      </div>
    </div>
  );
}

export default App;
