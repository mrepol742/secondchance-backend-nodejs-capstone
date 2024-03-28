const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const router = express.Router();
const connectToDatabase = require('../models/db');
const logger = require('../logger');

// Define the upload directory path
const directoryPath = 'public/images';

// Set up storage for uploaded files
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, directoryPath); // Specify the upload directory
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname); // Use the original file name
  },
});

const upload = multer({ storage: storage });


// Get all secondChanceItems
router.get('/', async (req, res, next) => {
    logger.info('/ called');
    try {
        //Step 2: task 1 - insert code here
        //Step 2: task 2 - insert code here
        //Step 2: task 3 - insert code here
        //Step 2: task 4 - insert code here

        const collection = db.collection("secondChanceItems");
        const secondChanceItems = await collection.find({}).toArray();
        res.json(secondChanceItems);
    } catch (e) {
        logger.console.error('oops something went wrong', e)
        next(e);
    }
});

// Add a new item
router.post('/', {Step 3: Task 6 insert code here}, async(req, res,next) => {
    try {

        //Step 3: task 1 - insert code here
        //Step 3: task 2 - insert code here
        //Step 3: task 3 - insert code here
        //Step 3: task 4 - insert code here
        //Step 3: task 5 - insert code here
        res.status(201).json(secondChanceItem.ops[0]);
    } catch (e) {
        next(e);
    }
});

// Get a single secondChanceItem by ID
router.get('/:id', async (req, res, next) => {
    try {
        //Step 4: task 1 - insert code here
        //Step 4: task 2 - insert code here
        //Step 4: task 3 - insert code here
        //Step 4: task 4 - insert code here
    } catch (e) {
        next(e);
    }
});

// Update and existing item
router.put('/:id', async(req, res,next) => {
    try {
        //Step 5: task 1 - insert code here
        //Step 5: task 2 - insert code here
        //Step 5: task 3 - insert code here
        //Step 5: task 4 - insert code here
        //Step 5: task 5 - insert code here
    } catch (e) {
        next(e);
    }
});

// Delete an existing item
router.delete('/:id', async(req, res,next) => {
    try {
        //Step 6: task 1 - insert code here
        //Step 6: task 2 - insert code here
        //Step 6: task 3 - insert code here
        //Step 6: task 4 - insert code here
    } catch (e) {
        next(e);
    }
});

module.exports = router;
