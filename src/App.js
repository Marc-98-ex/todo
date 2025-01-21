import './App.css';
import React, { useState, useEffect } from 'react';
import ItemList from './components/ItemList';

function App() {
  const [tasks, setTasks] = useState([]); // Anfangsliste der Aufgaben
  const [inputValue, setInputValue] = useState(''); // Zustand für das Eingabefeld
  const [benutzer, setBenutzer] = useState([]); // Zustand für Benutzer (nicht benutzt im Code, könnte entfernt werden)

  // Aufgabe hinzufügen
  const addTask = () => {
    if (inputValue.trim() !== '') {
      const newTask = {
        id: tasks.length + 1,
        text: inputValue,
        status: 'New',
      };
      setTasks([...tasks, newTask]); // Neue Aufgabe hinzufügen
      setInputValue(''); // Eingabefeld zurücksetzen
    }
  };

  // Aufgabe löschen
  const deleteTask = (taskId) => {
    const updatedTaskList = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTaskList); // Aufgabe löschen
  };

  // Aufgabe als erledigt markieren
  const toggleComplete = (taskId) => {
    const updatedTaskList = tasks.map((task) =>
      task.id === taskId
        ? { ...task, status: task.status === 'Done' ? 'New' : 'Done' }
        : task
    );
    setTasks(updatedTaskList); // Aufgabe aktualisieren
  };

  // Aufgabe bearbeiten
  const updateTask = (id, updatedText) => {
    const updatedTaskList = tasks.map((task) =>
      task.id === id ? { ...task, text: updatedText } : task
    );
    setTasks(updatedTaskList); // Aufgabenliste mit bearbeitetem Text aktualisieren
  };

  return (
    <div className="App">
      <h1>Todo App</h1>

      {/* Eingabefeld zum Hinzufügen einer neuen Aufgabe */}
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Neue Aufgabe hinzufügen"
      />
      <button onClick={addTask}>Add Task</button>

      {/* Anzeige der Aufgaben */}
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

