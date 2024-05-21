import express from 'express'
import {getCard} from '../controllers/IOTController.js'

const router = express.Router();

router.get('/card', getCard)


export default router;