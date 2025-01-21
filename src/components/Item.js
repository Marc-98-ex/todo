import React, { useState } from 'react';

function Item({ task, updateTask, deleteTask, toggleComplete }) {
  const { id, text, status } = task;
  const [inputValue, setInputValue] = useState(text); // Zustand für die Textbearbeitung

  // Funktion, um den Text zu ändern
  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  // Speichern der Änderungen
  const handleSave = () => {
    updateTask(id, inputValue); // Aufruf der updateTask-Funktion
  };

  // Aufgabe löschen
  const handleDelete = () => {
    deleteTask(id); // Aufruf der deleteTask-Funktion
  };

  // Aufgabe als erledigt markieren
  const handleToggleComplete = () => {
    toggleComplete(id); // Aufruf der toggleComplete-Funktion
  };

  return (
    <div className={`item-container ${status}`}>
      <span>{id}</span>
      <div>Status: {status}</div>

      {/* Bearbeitbares Input-Feld */}
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Bearbeite die Aufgabe..."
      />

      {/* Buttons */}
      <button onClick={handleSave}>Save</button>
      <button onClick={handleToggleComplete}>
        {status === 'Done' ? 'Mark as New' : 'Mark as Done'}
      </button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default Item;

