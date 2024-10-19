import express from 'express';
import { connect } from 'mongoose';
import cors from 'cors';

import productRoutes from './routes/product.routes.js';
const mongoURI = 'mongodb+srv://kevinogunlowo273:MlghX7qIhByXnxdv@cluster0.02mys.mongodb.net/Marketplace';


const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json()); // To parse JSON request bodies

// MongoDB connection
connect(mongoURI)
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Error connecting to MongoDB:', err));

// Define routes for products API
app.use('/api', productRoutes);

// Root route to check if the server is running
app.get('/', (req, res) => {
  res.send('Welcome to Dress Store Application');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
