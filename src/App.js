import './style/App.css';



import { apiAdd, apiGetTasks } from './api'; 

import React, { useState } from 'react';
import ItemList from './components/ItemList';

function App() {
  const myApiList = apiGetTasks();

  const [tasks, setTasks] = useState(myApiList);
  const [inputValue, setInputValue] = useState('');

  const addTask = () => {
    if (inputValue.trim()) {

      const newTask = {
        id: tasks.length + 1,
        text: inputValue,
        status: 'New',
        mumu : "hugo"
      };


      setTasks((prevTasks) => [...prevTasks, newTask]);
      setInputValue('');

      apiAdd(newTask);
    }
  };

  const deleteTask = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  const toggleComplete = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId
          ? { ...task, status: task.status === 'Done' ? 'New' : 'Done' }
          : task
      )
    );
  };

  const updateTask = (id, updatedText) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, text: updatedText } : task
      )
    );
  };

  return (
    <div className="App">
      <h1>Todo App</h1>
      <div className="task-input">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Neue Aufgabe hinzufügen"
        />
        <button onClick={addTask}>Add Task</button>
      </div>
      <ItemList
        tasks={tasks}
        updateTask={updateTask}
        deleteTask={deleteTask}
        toggleComplete={toggleComplete}
      />
    </div>
  );
}

export default App;
