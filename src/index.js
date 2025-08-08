import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

import projectRoutes from './routes/project.routes.js';
import authRoutes from './routes/auth.routes.js';

const app = express();
const PORT = process.env.PORT;

// Middleware
app.use(express.json());
app.use(cors());
// MongoDB connection
import connectToDB from './db/connectToDB.js';
connectToDB();

// Routes
app.get('/', (req, res) => {
  res.send('Welcome to My Portfolio Backend API');
});
app.use('/api/projects', projectRoutes);
app.use('/api/auth', authRoutes);


// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
export default app; 