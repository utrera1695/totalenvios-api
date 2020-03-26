import express from 'express';
import PdfService from './pdf.service';
import path from 'path';
import fs from 'fs-extra';
var pdf = require('html-pdf');
var router = express.Router();

router.get("/pdf",
  async (req, res) => {
    try {
      res.status(200).send('bien');
    } catch (error) {
      console.log(error);
      res.status(error.code || 500).send(error);
    }
  }
)
router.post("/pdf",
  async (req, res) => {
    try {
      let content = await PdfService.createPdf(req.body);
      pdf
        .create(content.html, content.options)
        .toFile(path.join(__dirname, '', 'calculo.pdf'), (err, response) => {
          if (!err) {
            res.sendFile(path.join(__dirname, '', 'calculo.pdf'));
          } else {
            console.log(err)
            res.status(500).send(err);
          }
        });
    } catch (error) {
      console.log(error);
      res.status(error.code || 500).send(error);
    }
  }
)
export default router;