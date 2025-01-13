function TaskList({ taskList, toggleComplete, handleDelete, updateTask }) {
    const handleEdit = (index) => {
      updateTask(index, taskList[index].text); // Lädt die Aufgabe zum Bearbeiten
    };
  
    return (
      <div>
        {taskList.map((t, index) => (
          <div key={index} style={{ textDecoration: t.completed ? 'line-through' : 'none' }}>
            {t.text}
            <button onClick={() => toggleComplete(t)}>
              {t.completed ? 'Undo' : 'Complete'}
            </button>
            <button onClick={() => handleEdit(index)}>Edit</button>
            <button onClick={() => handleDelete(t)}>Delete</button>
          </div>
        ))}
      </div>
    );
  }
  
  export default TaskList;
  