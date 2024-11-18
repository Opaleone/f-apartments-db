import express from 'express';
import cityRoute from './cityRoute';
import propertyRoute from './propertyRoute';
import floorplanRoute from './floorplanRoutes';
import detailsRoute from './detailRoutes';
import averagesRoute from './averageRoutes';


const router = express.Router();

router.use('/city', cityRoute)
router.use('/property', propertyRoute);
router.use('/floorplan', floorplanRoute);
router.use('/details', detailsRoute);
router.use('/averages', averagesRoute);

export default router;