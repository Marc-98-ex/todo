import React, { useEffect, useState } from 'react';
import { fetchCountries } from '../api'; // Importiere die Funktion aus der api.js
import CountryItem from './CountryItem';

import '../style/Country.css';


function Country() {
  // Zustand für die Daten (Liste der Länder)
  const [countries, setCountries] = useState([]);
  // Zustand für Ladeindikator
  const [loading, setLoading] = useState(true);
  // Zustand für Fehler
  const [error, setError] = useState(null);

  
  // useEffect, um die API zu laden, wenn die Komponente gerendert wird
  useEffect(() => {
    fetchCountries()
      .then((data) => {
        setCountries(data); // Speichern der Länder im Zustand
        setLoading(false); // Lade abgeschlossen
      })
      
      .catch((error) => {
        setError(error.message); // Fehlerbehandlung
        setLoading(false); // Lade abgeschlossen
      });
  }, []); // Der leere Array bedeutet, dass der Effekt nur einmal nach dem ersten Rendern ausgeführt wird
  
  return (
    <div className="App">
      <h1>Liste der Länder</h1>

      {loading && <p>Lade Daten...</p>} {/* Ladeanzeige */}
      {error && <p style={{ color: 'red' }}>Fehler: {error}</p>} {/* Fehleranzeige */}

      {/* Hier geben wir die Liste der Länder aus */}
      <div className='liste'>
      {countries.map((Item) => (
        <CountryItem key={Item.name} item={Item} />
        ))}
      </div>
     
    </div>
  );
}

export default Country;
