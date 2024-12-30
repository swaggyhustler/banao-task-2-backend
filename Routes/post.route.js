import express from 'express';
import { comment, createPost, deletePost, getPosts, likePost, unlike, updatePost } from '../Controllers/post.controller.js';

const router = express.Router();

router
.get('/', getPosts)
.post('/create', createPost)
.put('/update', updatePost)
.delete('/delete/:id', deletePost)
.get('/like/:id', likePost)
.post('/comment', comment)
.get('/unlike/:id', unlike);

export default router;