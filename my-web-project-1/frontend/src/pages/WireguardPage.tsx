import React, { useState } from 'react';
import { Button, Form, Alert } from 'react-bootstrap';

const WireguardPage: React.FC = () => {
    const [ip, setIp] = useState('');
    const [sshKeyPath, setSshKeyPath] = useState('');
    const [username, setUsername] = useState('');
    const [connectionStatus, setConnectionStatus] = useState<string | null>(null);

    const handleTestConnection = async () => {
        // Logic to test SSH connection
        // If successful, save the details to SQLite
        // Update connectionStatus based on the result
    };

    const handleSyncConfigFromRemote = async () => {
        // Logic to download wg0.conf from remote server
    };

    const handleSyncConfigToRemote = async () => {
        // Logic to upload wg0.conf to remote server
    };

    const handleRestartServer = async () => {
        // Logic to restart the WireGuard server on remote server
    };

    return (
        <div className="wireguard-page">
            <h2>Setup Remote WireGuard Server</h2>
            <Form>
                <Form.Group controlId="formIp">
                    <Form.Label>Server IP</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter server IP"
                        value={ip}
                        onChange={(e) => setIp(e.target.value)}
                    />
                </Form.Group>
                <Form.Group controlId="formSshKeyPath">
                    <Form.Label>SSH Key File Path</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter SSH key file path"
                        value={sshKeyPath}
                        onChange={(e) => setSshKeyPath(e.target.value)}
                    />
                </Form.Group>
                <Form.Group controlId="formUsername">
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </Form.Group>
                <Button variant="primary" onClick={handleTestConnection}>
                    Test Connection
                </Button>
            </Form>
            {connectionStatus && <Alert variant={connectionStatus === 'Success' ? 'success' : 'danger'}>{connectionStatus}</Alert>}
            <div className="sync-buttons">
                <Button variant="primary" onClick={handleSyncConfigFromRemote}>
                    Sync Config From Remote Server
                </Button>
                <Button variant="success" onClick={handleSyncConfigToRemote}>
                    Sync Config To Remote Server
                </Button>
                <Button variant="danger" onClick={handleRestartServer}>
                    Restart WireGuard Server
                </Button>
            </div>
        </div>
    );
};

export default WireguardPage;