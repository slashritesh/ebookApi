import express from 'express'
import { createEbook, deleteEbook, getALlEbooks, getSingleEbook, updateEbookDetails } from '../controllers/ebook.controller'
import { authenticatedUser } from '../middleware/authMiddleware'
import { upload } from '../middleware/multerMiddleware'
const router = express.Router()

router.route('/').get(getALlEbooks)
router.route('/create').post(authenticatedUser,upload.single("book"),createEbook)
router.route('/:id').get(getSingleEbook).patch(authenticatedUser,updateEbookDetails).delete(authenticatedUser,deleteEbook)

export default router