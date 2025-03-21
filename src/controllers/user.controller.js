const userModel = require("../models/user.model");

getUsers = (request, response) => {
    console.log(response);
    userModel.getUsers((error, data) => {
        if(error)
            response.status(500).send({
                message:
                    
                    error.message || "Erreur table user"
            });
        else response.send(data);
        
     
    })
}

// Fonction pour récupérer un utilisateur par son ID
getUserById = (req, res) => {
    const userId = req.params.id; // Récupère l'ID de l'URL
    console.log(`Route /user/${userId} appelée`);

    userModel.getUserById(userId, (error, data) => {
        if (error) {
            res.status(500).send({
                message: error.message || `Erreur lors de la récupération de l'utilisateur avec l'ID ${userId}`
            });
        } else if (data.length === 0) {
            res.status(404).send({
                message: `Utilisateur avec l'ID ${userId} non trouvé`
            });
        } else {
            res.json(data);  // Renvoie les données de l'utilisateur trouvé
        }
    });
};

// Fonction pour récupérer un utilisateur par son ID
getUserByName = (req, res) => {
    const userId = req.params.nom; // Récupère l'ID de l'URL
    console.log(`Route /user/filter/${userId} appelée`);

    userModel.getUserByName(userId, (error, data) => {
        if (error) {
            res.status(500).send({
                message: error.message || `Erreur lors de la récupération de l'utilisateur avec le nom ${userId}`
            });
        } else if (data.length === 0) {
            res.status(404).send({
                message: `Utilisateur avec le nom ${userId} non trouvé`
            });
        } else {
            res.json(data);  // Renvoie les données de l'utilisateur trouvé
        }
    });
};

createUser = (req, res) => {
    console.log(req.body);
    const { name, email } = req.body;  // Récupère les informations de l'utilisateur envoyées dans le body de la requête

    if (!name || !email) {
        return res.status(400).send({
            message: "Le nom, l'email et l'âge sont obligatoires"
        });
    }

    userModel.createUser({ name, email }, (error, result) => {
        if (error) {
            res.status(500).send({
                message: error.message || "Erreur lors de la création de l'utilisateur"
            });
        } else {
            res.status(201).send({
                message: "Utilisateur créé avec succès",
                user: result
            });
        }
    });
};

// Fonction pour mettre à jour un utilisateur
updateUser = (req, res) => {
    const userId = req.params.id; // Récupère l'ID de l'URL
    const { name, email } = req.body; // Récupère les nouvelles données de l'utilisateur

    if (!name || !email) {
        return res.status(400).send({
            message: "Le nom, l'email et l'âge sont obligatoires"
        });
    }

    userModel.updateUser(userId, { name, email }, (error, result) => {
        if (error) {
            res.status(500).send({
                message: error.message || "Erreur lors de la mise à jour de l'utilisateur"
            });
        } else {
            res.send({
                message: "Utilisateur mis à jour avec succès",
                user: result
            });
        }
    });
};

// Fonction pour supprimer un utilisateur
deleteUser = (req, res) => {
    const userId = req.params.id; // Récupère l'ID de l'URL

    userModel.deleteUser(userId, (error, result) => {
        if (error) {
            res.status(500).send({
                message: error.message || "Erreur lors de la suppression de l'utilisateur"
            });
        } else if (result.affectedRows === 0) {
            res.status(404).send({
                message: `Utilisateur avec l'ID ${userId} non trouvé`
            });
        } else {
            res.send({
                message: "Utilisateur supprimé avec succès"
            });
        }
    });
};

module.exports = {getUsers, getUserById, getUserByName, createUser, updateUser, deleteUser};