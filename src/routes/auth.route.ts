import express from 'express'
import { login, register } from '../controllers/auth.controller';
import { upload } from '../middleware/multerMiddleware';

const router = express.Router();

router.route('/register').post(upload.single('avatar'), register)
router.route('/login').post(login)


export default router