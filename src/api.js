
import axios from 'axios';

// Funktion, um Daten hinzuzufügen (zum Beispiel zu einer API)
export function apiAdd(dataObj) {
  alert("ADD DATA: " + dataObj.mumu);
}

export function apiGetTasks() {
 
  let $taskListe = [];

  let taskItem1 = { id: 1, status: "new", text: "Aufgabetext 1" };
  let taskItem2 = { id: 2, status: "Done", text: "Aufgabetext 2" };
  let taskItem3 = { id: 3, status: "new", text: "Aufgabetext 3" };
  let taskItem4 = { id: 4, status: "new", text: "Aufgabetext 4" };
  let taskItem5 = { id: 5, status: "Edit", text: "Aufgabetext 5" };
  let taskItem6 = { id: 6, status: "new", text: "Aufgabetext 6" };
  let taskItem7 = { id: 7, status: "New", text: "Aufgabetext 7" };
  let taskItem8 = { id: 8, status: "new", text: "Aufgabetext 8" };
  let taskItem9 = { id: 9, status: "new", text: "Aufgabetext 9" };
  let taskItem10 = { id: 10, status: "new", text: "Aufgabetext 10" };

  // Füge alle Aufgaben zur Liste hinzu
 $taskListe.push(taskItem1, taskItem3, taskItem4, taskItem5, taskItem6, taskItem7, taskItem8, taskItem9, taskItem10);
  $taskListe.push(taskItem3);

return $taskListe;

}

// Basis-URL für alle API-Aufrufe
const API_URL = 'https://api.sampleapis.com/countries';

// Axios-Instanz erstellen, falls du weitere Konfigurationen benötigst
const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json', // Optional: Setze den Content-Type
  },
});

// Funktion zum Abrufen der Länder
export const fetchCountries = async () => {
  try {
    // API-Endpunkt ohne die Basis-URL, da wir sie bereits in der axios-Instanz definiert haben
    const response = await api.get('/countries');
    return response.data; // Gib die Antwortdaten zurück
  } catch (error) {
    throw error; // Fehler werfen, falls einer auftritt
  }
};
