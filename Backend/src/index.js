import express from 'express';
import https  from 'http';
import cors from 'cors';

import setupSocket from  './config/socket.js';

const app = express();
app.use(cors());
app.use(express.json());

// Health check
app.get("/", (req, res) => {
    res.send("Backend is running...");
});

// create raw http server
const server = https.createServer(app);

// attach server to socket.io
setupSocket(server);

// start server 
const PORT = 5000;
server.listen(PORT, () => {
    console.log("Server is running...");
});