require('dotenv').config()

const express = require('express');
const cors = require('cors');
const healthRoutes = require('./routes/health.routes');
const todoRoutes = require('./routes/todo.routes');
const carrouselRoutes = require('./routes/carrousel.routes');

const app = express();
const db = require('./db');


const PORT = process.env.PORT || 3000;
const apiurl = process.env.APIURL || '/test/api';

app.use(cors({
  origin: '*',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  preflightContinue: false,
  optionsSuccessStatus: 204,
}));
app.use(express.json());

app.use(apiurl + '/health', healthRoutes);
app.use(apiurl + '/todo', todoRoutes);
app.use(apiurl + '/carrousel', carrouselRoutes)

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
