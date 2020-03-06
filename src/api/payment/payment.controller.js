import express from "express";
import PaymentService from "./payment.service";
var router = express.Router();

router.post("/payment",
  /* Guardar registro de pais */
  async (req, res) => {
    try {
      let payment = await PaymentService.SavePayment(req.body)
      res.status(200).send(payment)
    } catch (error) {
      console.log(error)
      res.status(error.code || 500).send(error)
    }
  });

router.get("/payment/all",
  async (req, res) => {
    try {
      let payment = await PaymentService.FindAllPayment()
      res.status(200).send(payment)
    } catch (error) {
      console.log(error)
      res.status(error.code || 500).send(error)
    }
  })

export default router;