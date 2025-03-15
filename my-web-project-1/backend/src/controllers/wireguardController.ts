import { Request, Response } from 'express';
import { exec } from 'child_process';
import { promisify } from 'util';
import { WireguardModel } from '../models/wireguardModel';

const execPromise = promisify(exec);

export const syncConfigFromRemote = async (req: Request, res: Response) => {
    const { ip, username, sshKeyPath } = req.body;

    try {
        const command = `scp -i ${sshKeyPath} ${username}@${ip}:/etc/wireguard/wg0.conf ./wg0.conf`;
        await execPromise(command);
        
        // Logic to update SQLite with clients from wg0.conf Peers
        // ...

        res.status(200).json({ message: 'Configuration downloaded successfully.' });
    } catch (error) {
        res.status(500).json({ message: 'Error downloading configuration.', error });
    }
};

export const syncConfigToRemote = async (req: Request, res: Response) => {
    const { ip, username, sshKeyPath } = req.body;

    try {
        const command = `scp -i ${sshKeyPath} ./wg0.conf ${username}@${ip}:/etc/wireguard/wg0.conf`;
        await execPromise(command);
        
        res.status(200).json({ message: 'Configuration uploaded successfully.' });
    } catch (error) {
        res.status(500).json({ message: 'Error uploading configuration.', error });
    }
};

export const restartWireGuardServer = async (req: Request, res: Response) => {
    const { ip, username, sshKeyPath } = req.body;

    try {
        const command = `ssh -i ${sshKeyPath} ${username}@${ip} 'sudo systemctl restart wg-quick@wg0'`;
        await execPromise(command);
        
        res.status(200).json({ message: 'WireGuard server restarted successfully.' });
    } catch (error) {
        res.status(500).json({ message: 'Error restarting WireGuard server.', error });
    }
};