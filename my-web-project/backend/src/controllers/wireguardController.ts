import { Request, Response } from 'express';
import { exec } from 'child_process';
import { connectToDatabase } from '../database';

export async function setupServer(req: Request, res: Response) {
    const { ip, username, keyPath } = req.body;
    const db = await connectToDatabase();

    const command = `ssh -i ${keyPath} ${username}@${ip} 'echo "Connection successful"'`;

    exec(command, async (error, stdout, stderr) => {
        if (error) {
            res.json({ success: false, message: error.message });
            return;
        }

        await db.run('INSERT INTO wireguard_servers (ip, username, keyPath) VALUES (?, ?, ?)', [ip, username, keyPath]);
        res.json({ success: true });
    });
}

export async function syncConfigFromRemote(req: Request, res: Response) {
    // Implement the logic to sync config from remote server
}

export async function syncConfigToRemote(req: Request, res: Response) {
    // Implement the logic to sync config to remote server
}

export async function restartServer(req: Request, res: Response) {
    // Implement the logic to restart the WireGuard server
}