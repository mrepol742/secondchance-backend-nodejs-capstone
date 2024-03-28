/*jshint esversion: 8 */
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const pinoLogger = require('./logger');
const secondChanceItemsRoutes = require('./routes/secondChanceItemsRoutes');
const connectToDatabase = require('./models/db');
const {loadData} = require("./util/import-mongo/index");


const app = express();
app.use("*",cors());
const port = 3061;

// Connect to MongoDB; we just do this one time
connectToDatabase().then(() => {
    pinoLogger.info('Connected to DB');
})
    .catch((e) => console.error('Failed to connect to DB', e));


app.use(express.json());


const pinoHttp = require('pino-http');
const logger = require('./logger');

app.use(pinoHttp({ logger }));

// Use Routes
// authRoutes Step 2: add the authRoutes and to the server by using the app.use() method.
//{{insert code here}}

// Items API Task 2: add the secondChanceItemsRoutes to the server by using the app.use() method.
app.use('/api/secondchance/items', secondChanceItemsRoutes);

// Search API Task 2: add the searchRoutes to the server by using the app.use() method.
//{{insert code here}}


// Global Error Handler
app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).send('Internal Server Error');
});

app.get("/",(req,res)=>{
    res.send("Inside the server")
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
