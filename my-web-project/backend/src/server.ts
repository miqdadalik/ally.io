import express from 'express';
import cors from 'cors';
import authRoutes from './routes/authRoutes';
import wireguardRoutes from './routes/wireguardRoutes';
import { connectToDatabase } from './database';

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/wireguard', wireguardRoutes);

connectToDatabase().then(() => {
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
}).catch((error) => {
    console.error('Failed to connect to the database:', error);
});