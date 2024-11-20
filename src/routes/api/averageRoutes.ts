import express from 'express';
import { createAverages, deleteAverages } from '../../controllers';

const router = express.Router();

router.route('/create')
.post(createAverages);

router.route('/:id')
  .delete(deleteAverages);

export default router;