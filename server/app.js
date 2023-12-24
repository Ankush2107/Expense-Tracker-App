import  express  from "express";
import cors from 'cors';
import { config } from 'dotenv';
import db from "./db/db.js";
import { readdirSync } from 'fs';
import transaction from "./routes/transaction.route.js";

config();

const app = express();

const PORT = process.env.PORT;

// middleware
app.use(express.json());
app.use(cors());

// router
app.use('/api/v1', transaction);
app.get('/', (req, res) => {
    res.send('Hello world');
});

const server = () => {
    db();
    app.listen(PORT, () => {
        console.log(`server is listening on http://localhost:${PORT}...`);
    });
}

server();