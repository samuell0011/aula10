const express = require('express');
const cors = require ('cors');
const mysql = require ('mysql2');
const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'aulabd'
});

//conectando ao banco de dados
db.connect((erro) => {
    if(erro) {
        console.error('Erro ao conectar ao MySql:', erro);
    } else {
        console.log('Conectado ao MySql com sucesso!');
    }
});