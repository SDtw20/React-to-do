import React from "react";

function TaskList(props){
    
    return(
    <ul className="taskList" data-testid="todo-template">
        <li className={`todo-item ${props.completed ? "completed":""}`}>

            <label className="todo-label" data-testid="todo-label" htmlFor={props.id} key={props.id} id={props.id}>
            {props.name}
            </label>

           <button type="button" data-testid="todo-done" className="btn btn__done" defaultChecked={props.completed} onClick={()=>props.toggleTaskCompletion(props.id)}>
            <i className={`fa ${props.completed ? "fa-undo":"fa-check"}`} aria-hidden="true" data-testid="tick"></i>
           </button>

           <button type="button" data-testid="todo-del" className="btn btn__del" onClick={()=>props.deleteTask(props.id)}>
           <i className="fa fa-trash" data-testid="bin" aria-hidden="true"></i>
           </button>

        </li>
    </ul>
    );
}

export default TaskList;