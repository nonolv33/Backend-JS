const databaseConnection = require("../db/db-connect");

const UserContructor = function(user) {
    this.name = UserContructor.name;
    this.email = UserContructor.email;
};



const userModel = {
    getUsers: (callback) => {
        const query = 'SELECT * FROM users'; 
        databaseConnection.query(query, (err, results) => {
            if (err) {
                callback(err, null);  // Si erreur, on passe l'erreur à la fonction de rappel
            } else {
                callback(null, results);  // Si tout va bien, on passe les résultats à la fonction de rappel
            }
        });
    },
    // Fonction pour récupérer un utilisateur par son ID
    getUserById: (id, callback) => {
        const query = 'SELECT * FROM users WHERE id = ?'; // Utilise une requête paramétrée pour sécuriser
        databaseConnection.query(query, [id], (err, results) => {
            if (err) {
                callback(err, null);  // Si erreur, on passe l'erreur
            } else {
                callback(null, results);  // Si tout va bien, on passe les résultats
            }
        });
    },
    // Fonction pour récupérer un utilisateur par son ID
    getUserByName: (name, callback) => {
        const query = 'SELECT * FROM users WHERE name = ?'; // Utilise une requête paramétrée pour sécuriser
        databaseConnection.query(query, [name], (err, results) => {
            if (err) {
                callback(err, null);  // Si erreur, on passe l'erreur
            } else {
                callback(null, results);  // Si tout va bien, on passe les résultats
            }
        });
    },
    // Fonction pour créer un utilisateur
    createUser: (user, callback) => {
        const query = 'INSERT INTO users (name, email) VALUES (?, ?)';  // Requête pour insérer un utilisateur
        databaseConnection.query(query, [user.name, user.email], (err, result) => {
            if (err) {
                callback(err, null);  // Si erreur, on passe l'erreur
            } else {
                callback(null, { id: result.insertId, ...user });  // On renvoie l'utilisateur créé avec son ID
            }
        });
    },
    // Fonction pour mettre à jour un utilisateur
    updateUser: (id, user, callback) => {
    const query = 'UPDATE users SET name = ?, email = ? WHERE id = ?';  // Requête pour mettre à jour un utilisateur
    databaseConnection.query(query, [user.name, user.email, id], (err, result) => {
        if (err) {
            callback(err, null);  // Si erreur, on passe l'erreur
        } else {
            callback(null, { id, ...user });  // On renvoie l'utilisateur mis à jour
        }
    });
},

// Fonction pour supprimer un utilisateur
deleteUser: (id, callback) => {
    const query = 'DELETE FROM users WHERE id = ?';  // Requête pour supprimer un utilisateur
    databaseConnection.query(query, [id], (err, result) => {
        if (err) {
            callback(err, null);  // Si erreur, on passe l'erreur
        } else {
            callback(null, result);  // On renvoie le résultat de la suppression
        }
    });
}
};

module.exports = userModel;

