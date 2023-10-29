import React, { useState } from "react";

function Form({addTask}){
    const[taskName,setName]=useState('');

    function handleSubmit(e) {
        e.preventDefault();
        if(taskName.trim()==='')
        window.alert("Task cannot be empty!");
        else
        addTask(taskName);
        setName('');
      }
    function handleChange(e){
        setName(e.target.value)
    }
    return(
        <form onSubmit={handleSubmit}>
        <input type="text" id="todo-input" data-testid="test-input" className="input" autoComplete="off" placeholder="Enter task" value={taskName} onChange={handleChange}></input>
        <button type="submit" data-testid="test-submit" className="btn btn-submit" >Add</button>
        </form>
    );
}

export default Form;