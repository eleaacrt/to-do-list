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
    0
    const query = `INSERT INTO task VALUES (NULL,"${req.body.task}",1)`;
    db.query(query, (err, result) => {
        if (err) {
            throw err;
        }
        console.log(result);
        res.send(result);
    });
});

app.put('/api/:id', (req, res) => {
    const query = `UPDATE task SET ext_state = ${req.body} WHERE id_task = ${req.params.id}`;
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

