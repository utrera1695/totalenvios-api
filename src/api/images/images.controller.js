import express from "express";
import ImageService from "./images.service";
import upload from '../../config/multer'
import path from 'path';
var router = express.Router();

router.post("/upload",
    upload.single('imagen'),
    async (req, res) => {
        try {
            res.status(200).send(req.file.filename)
        } catch (error) {
            res.status(error.code || 500).send(error)
        }
    });
router.post("/image",
    async (req, res) => {
        try {
            let image = await ImageService.Save(req.body)
            res.status(200).send(image)
        } catch (error) {
            res.status(error.code || 500).send(error)
        }
    });

router.get("/image",
    async (req, res) => {
        try {
            let image = await ImageService.GetImage(req.query.type)
            res.status(200).send(image)
        } catch (error) {
            console.log(error)
            res.status(error.code || 500).send(error)
        }
    });

router.get("/image/file",
    async (req, res) => {
        try {
            res.sendFile(path.resolve('./public/images/' + req.query.file));
        } catch (error) {
            res.status(error.code || 500).send(error)
        }
    }
)

router.delete("/image",
    async (req, res) => {
        try {
            let image = await ImageService.DeleteImage(req.query.id)
            res.sendStatus(200).send(image)
        } catch (error) {
            console.log(error)
            res.sendStatus(error.code || 500).send(error)
        }
    }
)
export default router;