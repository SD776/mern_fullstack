import express from 'express'
import { getAllreportes,getReporte, createReporte, updateReporte, deleteReporte } from '../controllers/ReportesController.js'
const router = express.Router()

router.get('/', getAllreportes)
router.get('/:id', getReporte)
router.post('/', createReporte)
router.put('/:id', updateReporte)
router.delete('/:id', deleteReporte)

export default router