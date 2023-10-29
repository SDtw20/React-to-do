import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.js';

const DATA = [
  { name: "Eat",id: "todo-0" ,completed:false},
  { name: "Sleep", id: "todo-1", completed:false},
  { name: "Repeat",id: "todo-2" ,completed:false}
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App tasks={DATA}/>
  </React.StrictMode>
);

