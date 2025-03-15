import { Request, Response } from 'express';
import { connectToDatabase } from '../database';

export async function login(req: Request, res: Response) {
    const { username, password } = req.body;
    const db = await connectToDatabase();

    const user = await db.get('SELECT * FROM users WHERE username = ? AND password = ?', [username, password]);

    if (user) {
        res.json({ success: true });
    } else {
        res.json({ success: false });
    }
}