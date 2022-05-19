require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const { getEvents, updateUsers } = require('./controller.js');
const {SERVER_PORT} = process.env


app.use(express.json());
app.use(cors());


app.get('/events', getEvents);
app.post('/users', updateUsers)


app.listen(SERVER_PORT, () => {
    console.log(`Docked at server ${SERVER_PORT}`)
});