import express from 'express';
import { createFloorplan, deleteFloorplan } from '../../controllers';

const router = express.Router();

router.route('/:id')
  .delete(deleteFloorplan);

router.route('/create')
  .post(createFloorplan);

export default router;