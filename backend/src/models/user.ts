import { Schema, model, Document } from 'mongoose';

interface IUser extends Document {
  nickName: string,
  email: string,
  password: string,
  id: string
}

const userSchema = new Schema({
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  nickName: { type: String, unique: true, required: true },
});

export default model<IUser>('User', userSchema);