import express from 'express';
import { login, register } from '../Controllers/auth.controller.js';

const router = express.Router();

router
.post('/register', register)
.post('/login', login);

export default router;