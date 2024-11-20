import express from 'express';
import { createFloorplan, deleteFloorplan } from '../../controllers';

const router = express.Router();

router.route('/create')
  .post(createFloorplan);

router.route('/:id')
  .delete(deleteFloorplan);

export default router;