import express from 'express';
import { createDetails, deleteDetails } from '../../controllers';

const router = express.Router();

router.route('/:id')
  .delete(deleteDetails);

router.route('/create')
  .post(createDetails);

export default router;