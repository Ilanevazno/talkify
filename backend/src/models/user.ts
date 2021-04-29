import { Schema, model } from 'mongoose';

const userSchema = new Schema({
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    nickName: { type: String, unique: true, required: true },
});

export default model('User', userSchema);