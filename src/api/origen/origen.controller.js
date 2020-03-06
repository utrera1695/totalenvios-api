import express from "express";
import OrigenService from "./origen.service";
var router = express.Router();

router.post("/origen",
  /* Guardar registro de pais */
  async (req, res) => {
    try {
      let origen = await OrigenService.SaveOrigen(req.body)
      res.status(200).send(origen)
    } catch (error) {
      res.status(error.code || 500).send(error)
      console.log(error)
    }
  });

router.get("/origen/:pais",
  async (req, res) => {
    try {
      let id_pais = req.params.pais
      let origen = await OrigenService.FindAllOrigen(id_pais)
      res.status(200).send(origen)
    } catch (error) {
      console.log(error)
      res.status(error.code || 500).send(error)
    }
  })

export default router;