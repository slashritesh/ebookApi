import express from 'express'
import { login, register } from '../controllers/auth.controller';

const router = express.Router();

router.route('/regsiter').post(register)
router.route('/login').post(login)


export default router