import express from 'express';
import { getOneProperty, createProperty, deleteProperty} from '../../controllers/index';

const router = express.Router();

router.route('/create')
  .post(createProperty);

router.route('/:id')
  .get(getOneProperty)
  .delete(deleteProperty);

export default router;