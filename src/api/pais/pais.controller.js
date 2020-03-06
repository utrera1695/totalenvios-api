import express from "express";
import PaisService from "./pais.service";
var router = express.Router();

router.post("/pais",
  /* Guardar registro de pais */
  async (req, res) => {
    try {
      let pais = await PaisService.SavePais(req.body)
      res.status(200).send(pais)
    } catch (error) {
      res.status(error.code || 500).send(error)
      console.log(error)
    }
  });

router.get("/pais/all",
  async (req, res) => {
    try {
      let pais = await PaisService.FindAllPais()
      res.status(200).send(pais)
    } catch (error) {
      console.log(error)
      res.status(error.code || 500).send(error)
    }
  })

export default router;