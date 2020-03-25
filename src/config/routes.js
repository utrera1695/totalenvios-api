import express from "express";
import PaisRouter from '../api/pais/pais.controller'
import OrigenRouter from '../api/origen/origen.controller'
import CiudadRouter from '../api/ciudades/ciudades.controller'
import BoxController from '../api/box/box.controller'
import ImagenController from '../api/images/images.controller'
import PaymentController from '../api/payment/payment.controller'
import SeguroController from '../api/seguro/seguro.controller'
import PdfController from '../api/pdf/pdf.controller'

var router = express.Router();
router.use('/api', PaisRouter)
router.use('/api', OrigenRouter)
router.use('/api', CiudadRouter)
router.use('/api', BoxController)
router.use('/api', ImagenController)
router.use('/api', PaymentController)
router.use('/api', SeguroController)
router.use('/api', PdfController)
router.use('/routes', router.get(() => {
  let routes = app._router.stack // registered routes
    .filter(r => r.route) // take out all the middleware
    .map(r => r.route.path) // get all the paths
  return routes
}))

export default router;