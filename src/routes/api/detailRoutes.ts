import express from 'express';
import { createDetails, deleteDetails } from '../../controllers';

const router = express.Router();

router.route('/create')
  .post(createDetails);

router.route('/:id')
  .delete(deleteDetails);

export default router;