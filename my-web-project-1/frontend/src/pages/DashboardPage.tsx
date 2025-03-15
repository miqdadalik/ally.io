import React from 'react';
import { Button } from 'react-bootstrap';

const DashboardPage: React.FC = () => {
    return (
        <div className="dashboard-page">
            <h2>Dashboard</h2>
            <p>Welcome to the WireGuard Management Dashboard!</p>
            <Button variant="primary" href="/wireguard">Manage WireGuard Server</Button>
            <Button variant="success" href="/manage-clients">Manage Clients</Button>
        </div>
    );
};

export default DashboardPage;