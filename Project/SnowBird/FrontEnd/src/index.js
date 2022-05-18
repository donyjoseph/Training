import React from 'react';
import ReactDOM from 'react-dom/client';
import EditTask from './EditTask';
import TaskList from './TaskList';
import AddTask from './AddTask';
 



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TaskList/>
  </React.StrictMode>
  
);