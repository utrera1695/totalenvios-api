import express from "express";
import CiudadesService from "./ciudades.service";
import ciudadesService from "./ciudades.service";
var router = express.Router();

router.post("/ciudad",
  /* Guardar registro de pais */
  async (req, res) => {
    try {
      let ciudad = await CiudadesService.SaveCiudad(req.body)
      res.status(200).send(ciudad)
    } catch (error) {
      res.status(error.code || 500).send(error)
      console.log(error)
    }
  });

router.get("/ciudad",
  async (req, res) => {
    try {
      let estado = req.query.estado
      let ciudad = await CiudadesService.FindCiudadByState(estado)
      res.status(200).send(ciudad)
    } catch (error) {
      console.log(error)
      res.status(error.code || 500).send(error)
    }
  })
router.get("/ciudad/pais",
  async (req, res) => {
    try {
      let pais = req.query.pais
      let estados = await ciudadesService.FindAllState(pais)
      res.status(200).send(estados)
    } catch (error) {
      console.log(error)
      res.status(error.code || 500).send(error)
    }
  }
)

export default router;