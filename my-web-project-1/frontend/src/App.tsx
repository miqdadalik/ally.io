import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import WireguardPage from './pages/WireguardPage';
import ManageClientsPage from './pages/ManageClientsPage';
import 'bootstrap/dist/css/bootstrap.min.css';

const App: React.FC = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={LoginPage} />
                <Route path="/dashboard" component={DashboardPage} />
                <Route path="/wireguard" component={WireguardPage} />
                <Route path="/manage-clients" component={ManageClientsPage} />
            </Switch>
        </Router>
    );
};

export default App;