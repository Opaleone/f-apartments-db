import express from 'express';
import { createAverages, deleteAverages } from '../../controllers';

const router = express.Router();

router.route('/:id')
  .delete(deleteAverages);

router.route('/create')
  .post(createAverages);

export default router;