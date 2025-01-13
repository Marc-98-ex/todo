import { useState, useEffect } from 'react';

function TaskForm({ addTask, updateTask, taskList }) {
  const [task, setTask] = useState('');
  const [isEditing, setIsEditing] = useState(null);

  // Wenn eine Aufgabe bearbeitet wird, setze den Text in das Eingabefeld
  useEffect(() => {
    if (isEditing !== null) {
      setTask(taskList[isEditing].text);
    }
  }, [isEditing, taskList]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (task.trim() !== '') {
      if (isEditing !== null) {
        updateTask(isEditing, task); // Aufgabe aktualisieren
        setIsEditing(null); // Bearbeitungsmodus beenden
      } else {
        addTask(task); // Neue Aufgabe hinzufügen
      }
      setTask(''); // Eingabefeld zurücksetzen
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder={isEditing !== null ? 'Edit task' : 'Enter a task'}
      />
      <input type="submit" value={isEditing !== null ? 'Update Task' : 'Add Task'} />
    </form>
  );
}

export default TaskForm;
