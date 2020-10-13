import express from 'express';
import postRouter from './routes/posts';
import replyRouter from './routes/replies';
import cors from 'cors';
import dotenv from 'dotenv';

const app = express();
app.use(cors());
app.use(express.json());

dotenv.config();
const PORT = process.env.PORT || '-1';

app.get('/api/ping', (_req, res) => {
  console.log('someone pinged here');
  res.send('pong');
});

app.use('/api/posts', postRouter);
app.use('/api/replies', replyRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});