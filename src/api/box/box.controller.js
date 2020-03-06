import express from "express";
import BoxService from "./box.service";
var router = express.Router();

router.post("/box",
  /* Guardar registro de pais */
  async (req, res) => {
    try {
      let box = await BoxService.SaveBox(req.body)
      res.status(200).send(box)
    } catch (error) {
      res.status(error.code || 500).send(error)
      console.log(error)
    }
  });

router.get("/box/all",
  async (req, res) => {
    try {
      let box = await BoxService.FindAllBox()
      res.status(200).send(box)
    } catch (error) {
      console.log(error)
      res.status(error.code || 500).send(error)
    }
  })

export default router;