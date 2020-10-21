import express from 'express';
import postRouter from './routes/posts';
import replyRouter from './routes/replies';
import pingRouter from './routes/ping';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();
const PORT = process.env.PORT || '-1';
const MONGO_URI = process.env.MONGODB_URI || 'URI_NOT_FOUND';

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('connected to MongoDB');
}).catch((error) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  console.log('error connection to MongoDB:', error.message);
});

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/ping', pingRouter); // Test routes
app.use('/api/posts', postRouter);
app.use('/api/replies', replyRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});