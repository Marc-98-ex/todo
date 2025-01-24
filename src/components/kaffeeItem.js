import React from 'react';

const TaskList = () => {
    const [tasks, setTasks] = useState([]); // State für die Aufgabenliste
  
    useEffect(() => {
      // Daten beim Laden der Komponente abrufen
      const fetchTasks = () => {
        const taskData = apiGetTasks(); // Hole die Daten aus der API
        setTasks(taskData); // Setze die Daten in den State
      };
  
      fetchTasks();
    }, []); // Leerer Dependency-Array, um den Effekt nur einmal auszuführen
  
    return (
      <div>
        <h1>Aufgabenliste</h1>
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>
              <strong>Status:</strong> {task.status} | <strong>Text:</strong> {task.text}
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default TaskList;