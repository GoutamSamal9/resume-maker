'use strict';
const express = require('express');
const serverless = require('serverless-http');
const app = express();
const PDFDocument = require('pdfkit');
const router = express.Router();
const bodyParser = require('body-parser');

router.post('/pdf', (req, res) => {
  try {
    // Create a new PDFDocument
  const doc = new PDFDocument();
  const { text } = req.body;


  // Set the content type and disposition headers
  res.setHeader('Content-Type', 'application/pdf');
  res.setHeader('Content-Disposition', 'inline; filename=example.pdf');

  // Pipe the PDF document to the response stream
  doc.pipe(res);

  // Add some text to the PDF document
  doc.text(text);

  // End the PDF document
  doc.end();
  } catch (error) {
    
  }
});

app.use(bodyParser.json());
app.use('/', router);
module.exports = app;
module.exports.handler = serverless(app);