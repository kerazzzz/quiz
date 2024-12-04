
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const questionsRouter = require('./routes/questions');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/questions', questionsRouter);

module.exports = app;