import React from 'react'
import { useState } from 'react';

const TodoForm = ({addTodo}) => {

    const [value, setValue] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();

        addTodo(value);

        setValue("");
    };

  return (
    <div className='mb-4'>
    <form action="#" onSubmit={handleSubmit}>
    

            <div className="d-flex gap-3 flex-column flex-lg-row">
              
              <input type="text" className="todo-input py-1 px-2 form-control w-30" placeholder="Add new task" 
              value={value} onChange={(e)=>setValue(e.target.value)} />
              <button type="button" className="btn btn-success"> Add Task</button>
            </div>
          </form>
    </div>
  )
}

export default TodoForm