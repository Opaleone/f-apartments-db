import express from 'express';
import { getAllCities, getOneCity, createCity, deleteCity } from '../../controllers';
import { checkExist } from '../../controllers/cityControllers';

const router = express.Router();

router.route('/check')
  .get(checkExist);

router.route('/create')
  .post(createCity);

router.route('/')
  .get(getAllCities);

router.route('/:cityName/:state')
  .get(getOneCity)
  .delete(deleteCity);

export default router;