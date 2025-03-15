import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { authRoutes } from './routes/authRoutes';
import { wireguardRoutes } from './routes/wireguardRoutes';
import { connectToDatabase } from './database';

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to the database
connectToDatabase();

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/wireguard', wireguardRoutes);

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});