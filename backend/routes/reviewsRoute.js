const socketIO = require('socket.io');
const reviewsController = require('../controllers/reviewsController');

module.exports = (server) => {
    // Inizializza Socket.IO sul server
    const io = socketIO(server, {
        cors: {
            origin: 'http://localhost:3000',
            methods: ['GET', 'POST']
        }
    });

    // Gestisci gli eventi di connessione dei client
    io.on('connection', (socket) => {
        console.log('Nuova connessione socket.io');

        socket.on('getReviews', () => {
            reviewsController.getReviews( (err, reviews) => {
                if (err) {
                    console.log(err);
                    return;
                }

                socket.emit('reviewsData', reviews);
            });
        });
    });
};




