import express from 'express';
import Attraction from '../models/Attraction.js';
import {
  createAttraction,
  updateAttraction,
  deleteAttraction,
  getAttraction,
  getAttractions,
  countByCity,
  countByType,
} from '../controllers/attraction.js';
import { verifyAdmin } from '../utils/verifyToken.js';

const router = express.Router();

//CREATE

router.post('/', verifyAdmin, createAttraction);

//UPDATE

router.put('/:id', verifyAdmin, updateAttraction);

//DELETE

router.delete('/:id', verifyAdmin, deleteAttraction);

//GET

router.get('/find/:id', getAttraction);

//GET ALL

router.get('/', getAttractions);
router.get('/countByCity', countByCity);
router.get('/countByType', countByType);

export default router;
