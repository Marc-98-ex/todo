import React, { useEffect, useState } from 'react';
import { fetchkaffee } from '../kaffeeapi'; // Importiere die Funktion aus der api.js
import KaffeeItem from './kaffeeItem'; // Importiere die Komponente mit einem Großbuchstaben

import '../style/Country.css';

function Kaffeeshop() {
  // Zustand für die Daten (Liste der Kaffees)
  const [kaffee, setKaffee] = useState([]);
  // Zustand für Ladeindikator
  const [loading, setLoading] = useState(true);
  // Zustand für Fehler
  const [error, setError] = useState(null);

  // useEffect, um die API zu laden, wenn die Komponente gerendert wird
  useEffect(() => {
    fetchkaffee()
      .then((data) => {
        setKaffee(data); // Speichern der Kaffees im Zustand
        setLoading(false); // Laden abgeschlossen
      })
      .catch((error) => {
        setError(error.message); // Fehlerbehandlung
        setLoading(false); // Laden abgeschlossen
      });
  }, []); // Der leere Array bedeutet, dass der Effekt nur einmal nach dem ersten Rendern ausgeführt wird

  return (
    <div className="Appkaffee">
      <h1>Liste der Kaffees</h1>

      {loading && <p>Lade Daten...</p>} {/* Ladeanzeige */}
      {error && <p style={{ color: 'red' }}>Fehler: {error}</p>} {/* Fehleranzeige */}

      {/* Hier geben wir die Liste der Kaffees aus */}
      <div className="Kaffeeliste">
        {kaffee.map((item) => (
          <KaffeeItem key={item.id} item={item} /> // Achte darauf, dass das `id`-Feld im API-Daten vorhanden ist
        ))}
      </div>
    </div>
  );
}

export default Kaffeeshop;

