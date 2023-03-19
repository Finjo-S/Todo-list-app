import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const Todo = ({ task,toggleComplete,editTodo, handleDelete }) => {
    
    const completedStyle = {
        textDecoration: task.completed ? "line-through" : "none",
        color: task.completed ? "gray" : "inherit"
      };  

  return (
    <div className="todo-list d-flex">
      <div className="check-group d-flex">
        <input type="checkbox" className="me-2" onChange={()=> toggleComplete(task.id)} checked={task.completed} />
        <p style={completedStyle}>{task.task}</p>
      </div>
      <div className="icons d-flex gap-2">
        {/* <FontAwesomeIcon icon={faPenToSquare} onClick={() => editTodo(task.id)} /> */}
        <FontAwesomeIcon icon={faTrash} onClick={()=> handleDelete(task.id)} />
      </div>
    </div>
  );
};

export default Todo;
