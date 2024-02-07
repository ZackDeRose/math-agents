import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';
import cors from 'cors';
import * as utils from 'utils';

const host = process.env.HOST ?? 'localhost';
const port = process.env.PORT ? Number(process.env.PORT) : 3000;

const app = express();
app.get('/', (req, res) => {
  res.json({ message: 'Hello API' });
});
const httpServer = createServer(app);
const socketServer = new Server(httpServer, { cors: { origin: true } });
app.use(cors({ origin: true }));

socketServer.on('connection', (socket) => {
  console.log('a user connected');
});
socketServer.on('', () => {
  console.log('a user disconnected');
});
app.listen(port);
console.log(`Server running at http://${host}:${port}/`);
