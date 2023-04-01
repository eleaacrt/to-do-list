// https://welovedevs.com/fr/articles/nodejs-mysql/
// -> Node.js et MySQL : comment utiliser MySQL sur une application Node ?

// https://expressjs.com/en/resources/middleware/cors.html
// -> CORS

const mysql = require('mysql');
const express = require('express');
const cors = require('cors');
const app = express();

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'to_do'
});

db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('MySQL Connected...');
});

app.use(cors()); // utiliser le middleware cors pour résoudre les erreurs de CORS

app.get('/api/tasks', (req, res) => { // utiliser l'URL /api pour récupérer les données
  db.query('SELECT * FROM task', (err, result) => {
    if (err) {
      throw err;
    }
    console.log(result);
    res.send(result); // envoyer les données au client
  });
});

app.listen(3001, () => {
  console.log('Server started on port 3001');
});

// function getStates() {
//     db.query('SELECT * FROM state', (err, result) => {
//         if (err) throw err;
//         console.log(result);
//     });
// }

// function getTasks() {
//     db.query('SELECT * FROM task', (err, result) => {
//         if (err) throw err;
//         console.log(result);
//     });
// }

// function insertTask(task, idState) {
//     db.query('INSERT INTO task SET ?', { task: task, ext_state: idState }, (err, result) => {
//         if (err) throw err;
//         console.log(result);
//     });
// }

// function updateTask(idTask, task, idState) {
//     db.query('UPDATE task SET ? WHERE id = ?', [{ task: task, ext_state: idState }, idTask], (err, result) => {
//         if (err) throw err;
//         console.log(result);
//     });
// }

// function deleteTask(idTask) {
//     db.query('DELETE FROM task WHERE id = ?', [idTask], (err, result) => {
//         if (err) throw err;
//         console.log(result);
//     });
// }

// getStates();