import express from "express";
import SeguroService from "./seguro.service";
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