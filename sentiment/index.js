require('dotenv').config();
const express = require('express');
const axios = require('axios');
const logger = require('./logger');
const expressPino = require('express-pino-logger')({ logger });
// Task 1: import the natural library
const natural = {{insert code here}}

// Task 2: initialize the express server
{{insert code here}}
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(expressPino);

// Define the sentiment analysis route
// Task 3: create the POST /sentiment analysis
app.{{insert method here}}('{{insert route here}}', async (req, res) => {

    // Task 4: extract the sentence parameter
    const { sentence } = {{insert code here}};


    if (!sentence) {
        logger.error('No sentence provided');
        return res.status(400).json({ error: 'No sentence provided' });
    }

    // Initialize the sentiment analyzer with the Natural's PorterStemmer and "English" language
    const Analyzer = natural.SentimentAnalyzer;
    const stemmer = natural.PorterStemmer;
    const analyzer = new Analyzer("English", stemmer, "afinn");

    // Perform sentiment analysis
    try {
        const analysisResult = analyzer.getSentiment(sentence.split(' '));

        let sentiment = "neutral";

        // Task 5: set sentiment to negative or positive based on score rules
        {{insert code here}}

        // Logging the result
        logger.info(`Sentiment analysis result: ${analysisResult}`);

        // Task 6: send a status code of 200 with both sentiment score and the sentiment txt in the format { sentimentScore: analysisResult, sentiment: sentiment }
        {{insert code here}}
    } catch (error) {
        logger.error(`Error performing sentiment analysis: ${error}`);
        // Task 7: if there is an error, return a HTTP code of 500 and the json {'message': 'Error performing sentiment analysis'}
        {{insert code here}}
    }
});

app.listen(port, () => {
    logger.info(`Server running on port ${port}`);
});
