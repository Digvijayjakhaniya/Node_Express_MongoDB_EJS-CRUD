import express from 'express'
import { studentController } from '../controllers/studentController.js'
const router = express.Router()

router.get('/',studentController.index)
router.get('/create',studentController.create)
router.post('/store',studentController.store)
router.get('/edit/:id',studentController.edit)
router.post('/update/:id',studentController.update)
router.get('/delete/:id',studentController.delete)


export default router