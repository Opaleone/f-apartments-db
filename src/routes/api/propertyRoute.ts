import express from 'express';
import { getOneProperty, createProperty, deleteProperty} from '../../controllers/index';

const router = express.Router();

router.route('/:id')
  .get(getOneProperty)
  .delete(deleteProperty);

router.route('/create')
  .post(createProperty);

export default router;