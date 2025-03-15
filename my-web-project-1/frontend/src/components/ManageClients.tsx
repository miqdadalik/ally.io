import React, { useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import QRCode from 'qrcode.react';

const ManageClients: React.FC = () => {
    const [clients, setClients] = useState<any[]>([]);
    const [newClient, setNewClient] = useState({ name: '', ip: '' });

    useEffect(() => {
        fetchClients();
    }, []);

    const fetchClients = async () => {
        // Logic to fetch clients from the backend
        // Example: const response = await fetch('/api/clients');
        // const data = await response.json();
        // setClients(data);
    };

    const addClient = async () => {
        // Logic to add a new client to the backend
        // Example: await fetch('/api/clients', { method: 'POST', body: JSON.stringify(newClient) });
        // fetchClients();
    };

    const generateWireGuardConfig = (client: any) => {
        // Logic to generate WireGuard config for the client
        return `[Interface]
PrivateKey = ${client.privateKey}
Address = ${client.ip}

[Peer]
PublicKey = ${client.publicKey}
AllowedIPs = ${client.ip}`;
    };

    return (
        <div className="manage-clients">
            <h2>Manage WireGuard Clients</h2>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>IP Address</th>
                        <th>Private Key</th>
                        <th>Public Key</th>
                        <th>QR Code</th>
                    </tr>
                </thead>
                <tbody>
                    {clients.map((client, index) => (
                        <tr key={index}>
                            <td>{client.name}</td>
                            <td>{client.ip}</td>
                            <td>{client.privateKey}</td>
                            <td>{client.publicKey}</td>
                            <td>
                                <QRCode value={generateWireGuardConfig(client)} />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            <div>
                <h3>Add New Client</h3>
                <input
                    type="text"
                    placeholder="Client Name"
                    value={newClient.name}
                    onChange={(e) => setNewClient({ ...newClient, name: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="Client IP"
                    value={newClient.ip}
                    onChange={(e) => setNewClient({ ...newClient, ip: e.target.value })}
                />
                <Button onClick={addClient}>Add Client</Button>
            </div>
        </div>
    );
};

export default ManageClients;