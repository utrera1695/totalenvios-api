import express from "express";
import contactTemplate from './contactemail'
const nodemailer = require('nodemailer');
var router = express.Router();

router.post("/email/contact",
  async (req, res) => {
    try {
      var body = req.body;
      var tp = nodemailer.createTransport({
        host: 'guiamedicavenezuela.com',
        port: '25',
        secure: false,
        tls: {
          // do not fail on invalid certs
          rejectUnauthorized: false
        },
        auth: {
          user: 'contacto@guiamedicavenezuela.com',
          pass: '3a9mYg6#'
        }
      });
      let info = await tp.sendMail({
        from: body.email,
        to: 'marlibyv@gmail.com',
        subject: 'Contacto realizado por ' + body.nombre,
        html: `${await contactTemplate.ContactTemplate(body)}`
      })
      if (info) {
        return true
      }
      res.status(200).send(req.file.filename)
    } catch (error) {
      throw error
    }
  });
export default router;