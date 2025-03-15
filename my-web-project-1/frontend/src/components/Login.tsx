import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import axios from 'axios';

const Login: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async (event: React.FormEvent) => {
        event.preventDefault();
        setError('');

        try {
            const response = await axios.post('/api/auth/login', { username, password });
            if (response.data.success) {
                // Handle successful login (e.g., redirect to dashboard)
            } else {
                setError('Invalid username or password');
            }
        } catch (err) {
            setError('An error occurred during login');
        }
    };

    return (
        <div className="login">
            <h2>Login to Dashboard</h2>
            <Form onSubmit={handleLogin}>
                <Form.Group controlId="formBasicUsername">
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </Form.Group>

                {error && <div className="error">{error}</div>}

                <Button variant="primary" type="submit">
                    Login
                </Button>
            </Form>
        </div>
    );
};

export default Login;