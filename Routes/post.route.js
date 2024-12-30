import express from 'express';
import { createPost, deletePost, getPosts, updatePost } from '../Controllers/post.controller.js';

const router = express.Router();

router
.get('/', getPosts)
.post('/create', createPost)
.put('/update', updatePost)
.delete('/delete/:id', deletePost);

export default router;