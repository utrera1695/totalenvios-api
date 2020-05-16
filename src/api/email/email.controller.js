import express from "express";
import contactTemplate from './contactemail'
const nodemailer = require('nodemailer');
var router = express.Router();

router.post("/email/contact",
  async (req, res) => {
    try {
      var body = req.body;
      var tp = nodemailer.createTransport({
        host: 'mail.totalenvios.com',
        port: '465'
      });
      let info = await tp.sendMail({
        from: body.email,
        to: 'info@totalenvios.com',
        subject: 'Contacto realizado por ' + body.nombre,
        html: `${await contactTemplate.ContactTemplate(body)}`
      })
      if (info) {
        res.status(200).send(true)
      } else {
        res.status(200).send(false)
      }

    } catch (error) {
      console.log(error)
      res.status(error.code || 500).send(error)
    }
  });
export default router;