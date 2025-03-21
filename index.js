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
                url: "http://127.0.0.1:8081/api/v1",
            },
        ],
    },
    apis: ['src/routes/*.js']
};

const server = http.createServer(function(req, res) {
    res.end();
});

// Lancer le serveur (en écoute au port 8081)
server.listen(3001);

const express = require('express');
const app = express();
const postRoutes = require('./src/routes/posts.route');

app.use(express.json());
app.use('/posts', postRoutes);

const PORT = process.env.PORT || 8081;
app.listen(PORT);
