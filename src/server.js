const dotenv = require('dotenv');
const express = require('express');

const userRoute = require('./routes/user.route');

dotenv.config();

const server = express();
server.use(express.json());
server.set('json spaces', 2);

// Ajoute les routes
server.use('/users', userRoute); 

const port = Number(process.env.PORT || 8081);
server.listen(port, 'localhost', () => {
    console.log(`Serveur démarré sur http://localhost:${port}`);
});


module.exports = server;
