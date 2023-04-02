// https://welovedevs.com/fr/articles/nodejs-mysql/
// -> Node.js et MySQL : comment utiliser MySQL sur une application Node ?

// https://expressjs.com/fr/starter/basic-routing.html
// -> Express : Routing

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

const corsOptions = {
    origin: 'http://localhost:3000',
    methods: ['GET', 'DELETE', 'POST', 'PUT'],
};

app.use(cors(corsOptions));
app.use(express.json());

db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('MySQL Connected...');
});

app.get('/api', (req, res) => {
    const query = 'SELECT * FROM task, state WHERE ext_state=id_state ORDER BY ext_state ASC';
    db.query(query, (err, result) => {
        if (err) {
            throw err;
        }
        console.log(result);
        res.send(result);
    });
});

app.delete('/api/:id', (req, res) => {
    const query = 'DELETE FROM task WHERE id_task = ?';
    db.query(query, [req.params.id], (err, result) => {
        if (err) {
            throw err;
        }
        console.log(result);
        res.send(result);
    });
});

app.post('/api', (req, res) => {
    const query = `INSERT INTO task VALUES (NULL,"${req.body.task}",1)`;
    db.query(query, (err, result) => {
        if (err) {
            throw err;
        }
        console.log(result);
        res.send(result);
    });
});



app.listen(3001, () => {
    console.log('Server started on port 3001');
});


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