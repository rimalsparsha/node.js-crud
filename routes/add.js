import express from "express";
const router = express.Router();

import voterController from '../controllers/voterController.js'

router.get('/',(req,res) => {
    res.render('add')
})


router.post('/', voterController.createDoc)


export default router;