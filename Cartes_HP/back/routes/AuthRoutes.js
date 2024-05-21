import express from 'express'
import { signUp,login} from '../controllers/AuthController.js'

const router = express.Router();

router.post('/signUp', signUp)
router.post('/login', login)

export default router;