import express from "express";
const router = express.Router();

import voterController from '../controllers/voterController.js'



/* router.get('/',(req,res) => {
    res.render('index')
}) */



router.get('/', voterController.getAllDoc)
router.get('/edit/:id', voterController.editDoc)
router.post('/update/:id', voterController.updateDocById)
router.post('/delete/:id', voterController.deleteDocById)




export default router;