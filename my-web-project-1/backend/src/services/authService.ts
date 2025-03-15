import { User } from '../models/userModel';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const SECRET_KEY = 'your_secret_key'; // Replace with your actual secret key

export const registerUser = async (username: string, password: string) => {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ username, password: hashedPassword });
    return await newUser.save();
};

export const validateUser = async (username: string, password: string) => {
    const user = await User.findOne({ username });
    if (user && await bcrypt.compare(password, user.password)) {
        return generateToken(user);
    }
    throw new Error('Invalid username or password');
};

const generateToken = (user: any) => {
    return jwt.sign({ id: user._id, username: user.username }, SECRET_KEY, { expiresIn: '1h' });
};