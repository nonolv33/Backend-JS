const express = require('express');
const router = express.Router();
const postController = require('../controllers/posts.controller');

router.get('/', postController.getAllPosts);
router.post('/', postController.createPost);
router.get('/:id', postController.getPostById);
router.put('/:id', postController.updatePost);
router.delete('/:id', postController.deletePost);

// Routes supplémentaires spécifiques aux posts
router.get('/user/:userId', postController.getPostsByUser);
router.get('/category/:category', postController.getPostsByCategory);
router.post('/:id/like', postController.likePost);
router.post('/:id/comment', postController.commentOnPost);

module.exports = router;
