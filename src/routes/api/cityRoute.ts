import express from 'express';
import { getAllCities, getOneCity, createCity, deleteCity } from '../../controllers';

const router = express.Router();

router.route('/')
  .get(getAllCities);

router.route('/:id')
  .get(getOneCity)
  .delete(deleteCity);

router.route('/create')
  .post(createCity);

export default router;