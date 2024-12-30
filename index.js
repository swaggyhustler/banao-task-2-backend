import express from 'express';
import { connectDB } from './Configs/db.config.js';
import dotenv from 'dotenv';
import authRoutes from './Routes/auth.route.js';
import postRoutes from './Routes/post.route.js';
import cors from 'cors';


const app = express();

app.use(cors());

app.use(cors({
    origin: "*"
}));

app.use(express.urlencoded({ extended: true }));

dotenv.config();

await connectDB();

app.use(express.json());

app.use('/auth', authRoutes);
app.use('/post', postRoutes);

app.get('/', (req, res)=>{
    res.send("<h1>Banao Task 2, Backend</h1>");
});

app.listen(5000, async ()=>{
    console.log("Listening on PORT 5000");
});