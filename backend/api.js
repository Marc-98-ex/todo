const API_URL = "http://localhost:3306"; // Deine Backend-URL

// Datei speichern (existierende Datei aktualisieren)
export async function saveFile(fileId, fileData) {
  try {
    const response = await fetch(`${API_URL}/files/${fileId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ fileData }),
    });
    if (!response.ok) throw new Error("Fehler beim Speichern der Datei");
    return await response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
}

// Neue Datei hinzufügen
export async function addFile(fileData) {
  try {
    const response = await fetch(`${API_URL}/files`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ fileData }),
    });
    if (!response.ok) throw new Error("Fehler beim Hinzufügen der Datei");
    return await response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
}

// Datei löschen
export async function deleteFile(fileId) {
  try {
    const response = await fetch(`${API_URL}/files/${fileId}`, {
      method: "DELETE",
    });
    if (!response.ok) throw new Error("Fehler beim Löschen der Datei");
    return response.ok;
  } catch (error) {
    console.error(error);
    return false;
  }
}
