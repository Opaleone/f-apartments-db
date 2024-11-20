import { Schema, model } from 'mongoose';
import { IFloorPlan } from '../../Interfaces';

const floorplanSchema = new Schema<IFloorPlan>({
  name: {
    type: Schema.Types.String,
  },
  beds: {
    type: Schema.Types.String,
  },
  baths: {
    type: Schema.Types.String,
  },
  details: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Detail'
    }
  ],
  averages: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Average'
    }
  ]
});

const Floorplan = model('Floorplan', floorplanSchema);

export default Floorplan;