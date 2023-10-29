import './App.css';
import React, { useState } from "react";
import Header from './Components/Header/Header.js';
import Form from './Components/InputForm/InputForm.js';
import Filters from './Components/Filter/Filters.js';
import TaskList from './Components/TodoItem/TodoItem.js';
import Footer from './Components/Footer/Footer.js';

function App(props) {

  const [filter, setFilter] = useState('All');

  const FILTER_MAP = {
    All: () => true,
    Active: (task) => !task.completed,
    Completed: (task) => task.completed
  };

  const FILTER_NAMES = Object.keys(FILTER_MAP);

  const filterList = FILTER_NAMES.map((name) => (
    <Filters data-testid="filters" className="filters" key={name} name={name} isPressed={name===filter} setFilter={setFilter}/>
  ));

  const[tasks,setTask]=useState(props.tasks)

  function toggleTaskCompletion(id){
    const updatedTasks = tasks.map((task) => {
      if (id === task.id) {
        return {...task, completed: !task.completed}
      }
      return task;
    });
    setTask(updatedTasks);
  }

  const arr=tasks||[];
  const taskList = arr.filter(FILTER_MAP[filter])
  .map((task) => (
    <TaskList name={task.name} id={task.id} key={task.id}
    deleteTask={deleteTask} 
    completed={task.completed} 
    toggleTaskCompletion={toggleTaskCompletion}/>
  ));

  function addTask(name) {
    let lastIndex=Math.random()*1000;
    let newTask={id:lastIndex+1, name:name, completed:false};
    setTask([...tasks,newTask]);
  }

  function deleteTask(id) {
    const remainingTasks = tasks.filter((task) => id !== task.id);
    setTask(remainingTasks);
  }

  return (
    <div className="App" data-testid="App">
      <Header className="head"/>
      <Form className="form" addTask={addTask}/>
      {filterList}
      <ul className="todo-list"  data-testid="todo-list" aria-labelledby="list-heading">
        {taskList}
      </ul>
      <Footer/>
    </div>
  );
}

export default App;
