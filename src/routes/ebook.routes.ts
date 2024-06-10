import express from 'express'
import { createEbook, deleteEbook, getALlEbooks, getSingleEbook, updateEbookDetails } from '../controllers/ebook.controller'
const router = express.Router()

router.route('/').get(getALlEbooks)
router.route('/create').post(createEbook)
router.route('/:id').get(getSingleEbook).patch(updateEbookDetails).delete(deleteEbook)

export default router