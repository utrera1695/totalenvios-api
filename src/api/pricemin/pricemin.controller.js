import express from "express";
import PriceMinService from "./pricemin.service";
var router = express.Router();

router.post("/pricemin",
  /* Guardar registro de pais */
  async (req, res) => {
    try {
      let box = await PriceMinService.SaveBox(req.body)
      res.status(200).send(box)
    } catch (error) {
      res.status(error.code || 500).send(error)
      console.log(error)
    }
  });

router.get("/pricemin/all",
  async (req, res) => {
    try {
      let box = await PriceMinService.FindAll()
      res.status(200).send(box)
    } catch (error) {
      console.log(error)
      res.status(error.code || 500).send(error)
    }
  })

export default router;