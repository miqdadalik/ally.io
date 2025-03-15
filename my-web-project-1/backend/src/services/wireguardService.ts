import { exec } from 'child_process';
import { promisify } from 'util';
import { Database } from 'sqlite3';

const execPromise = promisify(exec);

export class WireguardService {
    private db: Database;

    constructor(db: Database) {
        this.db = db;
    }

    public async syncConfigFromRemote(ip: string, username: string, sshKeyPath: string): Promise<void> {
        const command = `scp -i ${sshKeyPath} ${username}@${ip}:/etc/wireguard/wg0.conf ./wg0.conf`;
        await execPromise(command);
        // Logic to update SQLite with clients from wg0.conf Peers
    }

    public async syncConfigToRemote(ip: string, username: string, sshKeyPath: string): Promise<void> {
        const command = `scp -i ${sshKeyPath} ./wg0.conf ${username}@${ip}:/etc/wireguard/wg0.conf`;
        await execPromise(command);
    }

    public async restartServer(ip: string, username: string, sshKeyPath: string): Promise<void> {
        const command = `ssh -i ${sshKeyPath} ${username}@${ip} "sudo systemctl restart wg-quick@wg0"`;
        await execPromise(command);
    }

    public async saveServerConfig(ip: string, username: string, sshKeyPath: string): Promise<void> {
        // Logic to save server configuration details in SQLite
    }
}