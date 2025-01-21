import React from 'react';
import Item from './Item';

function ItemList({ tasks, updateTask, deleteTask, toggleComplete }) {
  return (
    <div className="ItemList">
      {tasks.map((task) => (
        <Item
          key={task.id}
          task={task}
          updateTask={updateTask}
          deleteTask={deleteTask}
          toggleComplete={toggleComplete}
        />
      ))}
    </div>
  );
}

export default ItemList;


