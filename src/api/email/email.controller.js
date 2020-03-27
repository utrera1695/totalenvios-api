import express from "express";
import contactTemplate from './contactemail'
const nodemailer = require('nodemailer');
var router = express.Router();

router.post("/email/contact",
  async (req, res) => {
    try {
      var body = req.body;
      var tp = nodemailer.createTransport({
        host: 'smtp.mailtrap.io',
        port: '2525',
        secure: false,
        tls: {
          // do not fail on invalid certs
          rejectUnauthorized: false
        },
        auth: {
          user: '7cac8acccc6fea',
          pass: '981ab13468a203'
        }
      });
      let info = await tp.sendMail({
        from: body.email,
        to: 'marlibyv@gmail.com',
        subject: 'Contacto realizado por ' + body.nombre,
        html: `${await contactTemplate.ContactTemplate(body)}`
      })
      if (info) {
        res.status(200).send(true)
      } else {
        res.status(200).send(false)
      }

    } catch (error) {
      throw error
    }
  });
export default router;