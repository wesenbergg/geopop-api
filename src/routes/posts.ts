import express from 'express';
import Post, { IPost } from '../models/post';

const router = express.Router();

router.get('/', async (_req, res) => {
  try {
    const posts = await Post.find({});
    res.status(200).json(posts.map(p => p.toJSON() as IPost));
  } catch(e){
    res.status(400).send('Error handler');
    console.log(e);
  }
});

router.post('/', async (req, res) => {
  try {
    const newPost = new Post({
      ...req.body
    });
  
    const savedPost = await newPost.save((e) => {
      res.status(400).send(e);
    });
    res.status(200).json(savedPost.toJSON());
  } catch (e) {
    console.log(e);
    res.status(500).send('Internal server error.');
  }
  
  res.status(200);
});

export default router;