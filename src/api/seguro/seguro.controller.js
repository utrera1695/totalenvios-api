import express from "express";
import SeguroService from "./seguro.service";
import PdfService from '../pdf/pdf.service';
import path from 'path';
import fs from 'fs-extra';
import pdf from 'html-pdf';
var router = express.Router();

router.post("/seguro",
  /* Guardar registro de pais */
  async (req, res) => {
    try {
      let seguro = await SeguroService.SaveSeguro(req.body)
      res.status(200).send(seguro)
    } catch (error) {
      console.log(error)
      res.status(error.code || 500).send(error)
    }
  });
router.post("/downloadpdf",
  /* Guardar registro de pais */
  async (req, res) => {
    try {
      let content = await PdfService.createPdf(req.body);
      pdf
        .create(content.html, content.options)
        .toFile(path.join(__dirname, '', ''), (err, response) => {
          if (!err) {
            res.sendFile(path.join(__dirname, '', ''));
          } else {
            res.status(500).send(err);
          }
        });
    } catch (error) {
      console.log(error);
      res.status(error.code || 500).send(error);
    }
  }
);
router.get("/seguro",
  async (req, res) => {
    try {
      let seguro = await SeguroService.FindSeguro()
      res.status(200).send(seguro)
    } catch (error) {
      console.log(error)
      res.status(error.code || 500).send(error)
    }
  })

export default router;