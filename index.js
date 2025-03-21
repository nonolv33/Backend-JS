const http = require("http");
const swaggerJsDoc = require('swagger-jsdoc');
const dotenv = require('dotenv');

const swaggerGeneration = {
    swaggerGeneration: {
        openapi: "3.0.0",
        info : {
            title: 'anApi',
            version: "0.1.0"
        },
        servers: [
            {

                url: "http://localhost:3001/api/v1",
            },
        ],
    },
    apis: ['src/routes/*.js']
}
const server = http.createServer (function(req, res) {
// A l'arrivée d'une requête
console.log("Serveur running at http://127.0.0.1:3001/");
res.end();
})

// Lancer le serveur (en écoute au port 3000)
server.listen(3001)

const express = require('express');
const app = express();
const postRoutes = require('./src/routes/posts.route');

app.use(express.json());
app.use('/posts', postRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Serveur démarré sur le port ${PORT}`));
