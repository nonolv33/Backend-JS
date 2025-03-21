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
                url: "http://localhost:8082/api/v1",
            },
        ],
    },
    apis: ['src/routes/*.js']
}
const server = http.createServer (function(req, res) {
// A l'arrivée d'une requête
console.log("Serveur running at http://127.0.0.1:8082/");
res.end();
})

// Lancer le serveur (en écoute au port 8082)
server.listen(8082)

const express = require('express');
const app = express();
const postRoutes = require('./routes/posts.route');

app.use(express.json());
app.use('/posts', postRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Serveur démarré sur le port ${PORT}`));
