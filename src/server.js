const dotenv = require('dotenv');
const express = require('express');

const userRoute = require('./routes/user.route');
const postsRoute = require('./routes/posts.route');

dotenv.config();

const server = express();
server.use(express.json());
server.set('json spaces', 2);

// Ajoute les routes
server.use('/users', userRoute); 
server.use('/posts', postsRoute); 

const port = Number(process.env.PORT || 8081);
server.listen(port, '127.0.0.1', () => {
    console.log(`Serveur démarré sur http://127.0.0.1:${port}`);
});


module.exports = server;
