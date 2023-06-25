const express = require('express');
const mongoose = require('mongoose');
const reviewsRoute = require('./routes/reviewsRoute');
const cors = require('cors');
const { createServer } = require('http');
const { Server } = require('socket.io');

mongoose.connect('mongodb+srv://chiaramallamaci043:Chiaramall01@cluster0.xtemrpl.mongodb.net/progetto?retryWrites=true&w=majority');

const app = express();
const db = mongoose.connection;
db.once('open', () => {
    console.log('Connessione al database riuscita');
});

app.use(cors({
    origin: 'http://localhost:3000',
}));

const server = createServer(app);
reviewsRoute(server);

server.listen(8080, () => {
    console.log('Server in ascolto sulla porta 8080');
});

