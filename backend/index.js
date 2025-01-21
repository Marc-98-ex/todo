const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json()); // Zum Verarbeiten von JSON-Daten im Request-Body

// Verbindung zur MySQL-Datenbank
const db = mysql.createConnection({
    host: 'localhost', // Datenbank-Host
    user: 'root',      // Dein MySQL-Benutzername
    password: 'Tekkdata99',      // Dein MySQL-Passwort
    database: 'Benutzerkonten', // Name der Datenbank
});

db.connect(err => {
    if (err) {
        console.error('Datenbankverbindung fehlgeschlagen:', err);
    } else {
        console.log('Mit der Datenbank verbunden!');
    }
});

// Beispiel-API-Endpunkt: Benutzerdaten abrufen
app.get('/benutzer', (req, res) => {
    const query = 'SELECT * FROM benutzer';
    db.query(query, (err, result) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.json(result);
        }
    });
});

// Server starten
app.listen(3306, () => {
    console.log('Server läuft auf Port 3306');
});
