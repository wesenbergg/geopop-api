import mongoose, { Schema, Document } from 'mongoose';

export interface IPost extends Document {
  sender_id: number;
  createdAt: Date;
  gif: string;
  label: string;
  marker: string;
}

const postSchema = new Schema<IPost>({
  sender_id: {
    type: Number,
    required: true
  },
  createdAt: {
    type: Date,
    default: new Date().toJSON().slice(0,10).replace(/-/g,'/')
  },
  gif: {
    type: String,
    required: true
  },
  label: {
    type: String,
    required: true
  },
  marker: {
    type: String,
    required: true
  }
});

export default mongoose.model<IPost>('Post', postSchema);