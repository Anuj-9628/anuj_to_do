import TodoItem from "./Todoitem";
import styles from "./TodoItem.module.css";
const TodoItems = ({ todoItems, onDeleteClick }) => {
  return (
    <div className={"item-container"}>
      {todoItems.map((item) => (
        <TodoItem
          key={item.name}
          tododate={item.duedate}
          todoname={item.name}
          onDeleteClick={onDeleteClick}
        ></TodoItem>
      ))}
    </div>
  );
};
export default TodoItems;
