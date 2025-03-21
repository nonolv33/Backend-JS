const databaseConnection = require("../db/db-connect");

const PostConstructor = function(post) {
    this.title = post.title;
    this.content = post.content;
    this.user_id = post.user_id;
};

const postModel = {
    // Récupérer tous les posts
    getPosts: (callback) => {
        const query = 'SELECT * FROM Posts';
        databaseConnection.query(query, (err, results) => {
            if (err) {
                callback(err, null);
            } else {
                callback(null, results);
            }
        });
    },

    // Récupérer un post par son ID
    getPostById: (id, callback) => {
        const query = 'SELECT * FROM Posts WHERE id = ?';
        databaseConnection.query(query, [id], (err, results) => {
            if (err) {
                callback(err, null);
            } else {
                callback(null, results);
            }
        });
    },

    // Récupérer tous les posts d'un utilisateur spécifique
    getPostsByUserId: (userId, callback) => {
        const query = 'SELECT * FROM Posts WHERE user_id = ?';
        databaseConnection.query(query, [userId], (err, results) => {
            if (err) {
                callback(err, null);
            } else {
                callback(null, results);
            }
        });
    },

    // Créer un nouveau post
    createPost: (post, callback) => {
        const query = 'INSERT INTO Posts (user_id, title, content) VALUES (?, ?, ?)';
        databaseConnection.query(query, [post.user_id, post.title, post.content], (err, result) => {
            if (err) {
                callback(err, null);
            } else {
                callback(null, { id: result.insertId, ...post });
            }
        });
    },

    // Mettre à jour un post
    updatePost: (id, post, callback) => {
        const query = 'UPDATE Posts SET title = ?, content = ? WHERE id = ?';
        databaseConnection.query(query, [post.title, post.content, id], (err, result) => {
            if (err) {
                callback(err, null);
            } else {
                callback(null, { id, ...post });
            }
        });
    },

    // Supprimer un post
    deletePost: (id, callback) => {
        const query = 'DELETE FROM Posts WHERE id = ?';
        databaseConnection.query(query, [id], (err, result) => {
            if (err) {
                callback(err, null);
            } else {
                callback(null, result);
            }
        });
    }
};

module.exports = postModel;
