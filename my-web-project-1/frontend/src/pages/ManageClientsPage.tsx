import React, { useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import ManageClients from '../components/ManageClients';

const ManageClientsPage: React.FC = () => {
    const [clients, setClients] = useState([]);

    useEffect(() => {
        fetchClients();
    }, []);

    const fetchClients = async () => {
        // Logic to fetch clients from the backend API
        const response = await fetch('/api/clients');
        const data = await response.json();
        setClients(data);
    };

    const handleAddClient = async (clientData) => {
        // Logic to add a new client
        const response = await fetch('/api/clients', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(clientData),
        });
        if (response.ok) {
            fetchClients(); // Refresh the client list
        }
    };

    return (
        <div className="manage-clients-page">
            <h2>Manage WireGuard Clients</h2>
            <ManageClients onAddClient={handleAddClient} />
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>IP Address</th>
                        <th>Private Key</th>
                        <th>Public Key</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {clients.map(client => (
                        <tr key={client.id}>
                            <td>{client.name}</td>
                            <td>{client.ip}</td>
                            <td>{client.privateKey}</td>
                            <td>{client.publicKey}</td>
                            <td>
                                <Button variant="danger" onClick={() => handleDeleteClient(client.id)}>Delete</Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
};

export default ManageClientsPage;