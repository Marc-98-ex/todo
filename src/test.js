import './App.css';
import { useState } from 'react';
import TaskForm from './TaskForm';
import TaskList from './TaskList';

function App() {
  const [taskList, setTaskList] = useState([]); // Aufgabenliste
  const [selectedTask, setSelectedTask] = useState(null); // Aktuell ausgewählte Aufgabe

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

  // Funktion, um die ausgewählte Aufgabe zu setzen
  const selectTask = (task) => {
    setSelectedTask(task); // Ausgewählte Aufgabe speichern
  };

  return (
    <div className="App">
      <h1>Todo App</h1>
      {/* Zeige die aktuell ausgewählte Aufgabe */}
      {selectedTask && <div className="selected-task">Ausgewählt: {selectedTask.text}</div>}
      {/* TaskList zeigt alle Aufgaben */}
      <TaskList
        taskList={taskList}
        toggleComplete={toggleComplete}
        handleDelete={handleDelete}
        updateTask={updateTask}
        selectTask={selectTask} // Übergabe der selectTask-Funktion
      />
      {/* TaskForm ermöglicht es, Aufgaben hinzuzufügen und zu bearbeiten */}
      <TaskForm addTask={addTask} updateTask={updateTask} taskList={taskList} />
    </div>
  );
}

export default App;
