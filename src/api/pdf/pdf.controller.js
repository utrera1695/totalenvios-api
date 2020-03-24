import express from 'express';
import PdfService from './pdf.service';
import path from 'path';
import fs from 'fs-extra';
import pdf from 'html-pdf';
var router = express.Router();

router.post("/pdf",
  /* Guardar registro de pais */
  async (req, res) => {
    try {
      let content = await PdfService.createPdf(req.body);
      pdf
        .create(content.html, content.options)
        .toFile(path.join(__dirname, '', ''), (err, response) => {
          if (!err) {
            res.sendFile(path.join(__dirname, '', ''));
          }
        });
    } catch (error) {
      console.log(error);
      res.status(error.code || 500).send(error);
    }
  }
);

export default router;