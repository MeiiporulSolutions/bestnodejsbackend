const express = require('express');
const app = express();
const { connectToDatabase } = require('./config/database');
const errorHandler = require('./middleware/errorHandler');
const bedRoutes = require('./bed/bedRoutes');
const admitRoutes = require('./admit/admitRoutes');
const transferRoutes=require('./transfer/transferRoutes');
const dischargeRoutes=require('./discharge/dischargeRoutes');
const waitingRoutes=require('./waiting/waitingRoutes')
const dashRoutes=require('./dashboard/dashroutes')
require('dotenv').config(); // Load environment variables

// Connect to the database
connectToDatabase();

// Middleware
app.use(express.json()); // Middleware to parse JSON bodies


// Routes
app.use('/add', bedRoutes); // Bed routes
app.use('/', admitRoutes); // Admit routes
app.use('/tp', transferRoutes); //  routes
app.use('/',dischargeRoutes);
app.use('/',waitingRoutes);
app.use('/',dashRoutes);

// Error handling middleware
app.use(errorHandler);
// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
