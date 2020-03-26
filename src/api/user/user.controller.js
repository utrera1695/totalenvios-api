import express from 'express';
import UserService from './user.service';
var router = express.Router();

router.post(
  '/login',
  /* Guardar registro de pais */
  async (req, res) => {
    try {
      let user = await UserService.Login(req.body);
      res.status(200).send(user);
    } catch (error) {
      console.log(error);
      res.status(error.code || 500).send(error);
    }
  }
);

router.post('/register', async (req, res) => {
  try {
    let user = await UserService.Register(req.body);
    res.status(200).send(user);
  } catch (error) {
    console.log(error);
    res.status(error.code || 500).send(error);
  }
});

export default router;
