const express = require('express');
const fs = require('fs');
const path = require("path");
const router = express.Router();
const logger = require('../logger');

router.get('/:image', async (req, res, next) => {
    try {
        const image = req.params.image;
        res.sendFile(path.resolve("./public/images/" + image));
    } catch (e) {
        logger.error(e);
        return res.status(500).send('Internal server error');
    }
});

module.exports = router;