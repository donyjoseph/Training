import React from 'react';
import ReactDOM from 'react-dom/client';
import AddTask from './AddTask';
import TaskList from './TaskList';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AddTask/>
  </React.StrictMode>
);