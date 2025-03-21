const Post = require('../models/posts.model');

exports.getAllPosts = (req, res) => {
    Post.getAll((err, results) => {
        if (err) return res.status(500).json({ error: err });
        res.json(results);
    });
};

exports.getPostById = (req, res) => {
    Post.getById(req.params.id, (err, result) => {
        if (err) return res.status(500).json({ error: err });
        if (!result.length) return res.status(404).json({ message: 'Post non trouvé' });
        res.json(result[0]);
    });
};

exports.createPost = (req, res) => {
    const newPost = req.body;
    Post.create(newPost, (err, result) => {
        if (err) return res.status(500).json({ error: err });
        res.json({ id: result.insertId, ...newPost });
    });
};

exports.updatePost = (req, res) => {
    Post.update(req.params.id, req.body, (err) => {
        if (err) return res.status(500).json({ error: err });
        res.json({ message: 'Post mis à jour' });
    });
};

exports.deletePost = (req, res) => {
    Post.delete(req.params.id, (err) => {
        if (err) return res.status(500).json({ error: err });
        res.json({ message: 'Post supprimé' });
    });
};

// Récupérer les posts par utilisateur
exports.getPostsByUser = (req, res) => {
    Post.getByUserId(req.params.userId, (err, results) => {
        if (err) return res.status(500).json({ error: err });
        res.json(results);
    });
};

// Récupérer les posts par catégorie (si applicable)
exports.getPostsByCategory = (req, res) => {
    Post.getByCategory(req.params.category, (err, results) => {
        if (err) return res.status(500).json({ error: err });
        res.json(results);
    });
};

// Liker un post
exports.likePost = (req, res) => {
    Post.like(req.params.id, (err) => {
        if (err) return res.status(500).json({ error: err });
        res.json({ message: 'Post liké' });
    });
};

// Ajouter un commentaire à un post
exports.commentOnPost = (req, res) => {
    const { comment } = req.body;
    Post.comment(req.params.id, comment, (err) => {
        if (err) return res.status(500).json({ error: err });
        res.json({ message: 'Commentaire ajouté' });
    });
};
