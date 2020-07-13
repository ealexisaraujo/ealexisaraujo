const express = require('express');
const morgan = require('morgan');
const app = express();
const cors = require('cors');

app.use(cors());

// Ver por consola las peticiones que vayan llegando
app.use(morgan('dev'));

//Recibir las peticiones en formato json
app.use(express.json());

//Routes
app.use(require('./src/routes/task.routes'));

module.exports = app;
