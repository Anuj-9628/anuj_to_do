import { AiFillDelete } from "react-icons/ai";
function TodoItem({ todoname, tododate, onDeleteClick }) {
  return (
    <div className="row kg-row">
      <div className="col-6">{todoname}</div>
      <div className="col-4">{tododate}</div>
      <div className="col-2">
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => onDeleteClick(todoname)}
        >
      <AiFillDelete />
        </button>
      </div>
    </div>
  );
}
export default TodoItem;
