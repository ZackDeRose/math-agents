import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';
import cors from 'cors';

const host = process.env.HOST ?? 'localhost';
const port = process.env.PORT ? Number(process.env.PORT) : 3000;

const app = express();
const httpServer = createServer(app);
const socketServer = new Server(httpServer, { cors: { origin: true } });
app.use(cors({ origin: true }));

socketServer.on('connection', (socket) => {
  console.log('a user connected');
});
socketServer.on('', () => {
  console.log('a user disconnected');
});
