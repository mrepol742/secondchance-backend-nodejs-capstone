const express = require('express');
const jwt = require("jsonwebtoken");
const router = express.Router();
const bcryptjs = require("bcryptjs");
const connectToDatabase = require('../models/db');
const logger = require('../logger');

const JWT_SECRET = `${process.env.JWT_SECRET}`;

router.post('/register', async (req, res) => {
    try {
        const email =  req.body.email;
        // Task 1: Connect to `secondChance` in MongoDB through `connectToDatabase` in `db.js`.
        const db = await connectToDatabase();
        // Task 2: Access MongoDB `users` collection
        const collection = db.collection("users");
        // Task 3: Check if user credentials already exists in the database and throw an error if they do
        const existingEmail = await collection.findOne({ email: req.body.email });

        if (existingEmail) {
            logger.error('Email id already exists');
            return res.status(400).json({ error: 'Email id already exists' });
        }
        // Task 4: Create a hash to encrypt the password so that it is not readable in the database
        const salt = await bcryptjs.genSalt(10);
        const hash = await bcryptjs.hash(req.body.password, salt);
        // Task 5: Insert the user into the database
        const newUser = await collection.insertOne({
            email: req.body.email,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            password: hash,
            createdAt: new Date(),
        });
        // Task 6: Create JWT authentication if passwords match with user._id as payload
        const payload = {
            user: {
                id: newUser.insertedId,
            },
        };
        
        const authtoken = jwt.sign(payload, JWT_SECRET);
        // Task 7: Log the successful registration using the logger
        logger.info('User registered successfully');
        // Task 8: Return the user email and the token as a JSON
        res.json({ authtoken,email });
    } catch (e) {
        console.error(e);
         return res.status(500).send('Internal server error');
    }
});

module.exports = router;
