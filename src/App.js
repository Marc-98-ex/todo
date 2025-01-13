import './App.css';
import { useState } from 'react';
import TaskForm from './TaskForm';
import TaskList from './TaskList';

function App() {
  const [taskList, setTaskList] = useState([]); // Aufgabenliste

  // Funktion, um eine neue Aufgabe hinzuzufügen
  const addTask = (taskText) => {
    setTaskList([...taskList, { text: taskText, completed: false }]);
  };

  // Funktion, um eine bestehende Aufgabe zu aktualisieren
  const updateTask = (index, updatedText) => {
    const updatedTaskList = taskList.map((t, i) =>
      i === index ? { ...t, text: updatedText } : t
    );
    setTaskList(updatedTaskList); // Aufgabenliste aktualisieren
  };

  // Funktion, um eine Aufgabe zu löschen
  const handleDelete = (deletingTask) => {
    const updatedTaskList = taskList.filter((t) => t.text !== deletingTask.text);
    setTaskList(updatedTaskList);
  };

  // Funktion, um den Erledigt-Status einer Aufgabe zu ändern
  const toggleComplete = (taskToToggle) => {
    const updatedTaskList = taskList.map((t) =>
      t.text === taskToToggle.text ? { ...t, completed: !t.completed } : t
    );
    setTaskList(updatedTaskList);
  };

  return (
    <div className="App">
      <h1>Todo App</h1>
      {/* TaskList zeigt alle Aufgaben */}
      <TaskList
        taskList={taskList}
        toggleComplete={toggleComplete}
        handleDelete={handleDelete}
        updateTask={updateTask}
      />
      {/* TaskForm ermöglicht es, Aufgaben hinzuzufügen und zu bearbeiten */}
      <TaskForm addTask={addTask} updateTask={updateTask} taskList={taskList} />
    </div>
  );
}

export default App;
