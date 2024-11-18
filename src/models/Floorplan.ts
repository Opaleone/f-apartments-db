import { Schema, model } from 'mongoose';
import { IFloorPlan } from '../../Interfaces';

const floorplanSchema = new Schema<IFloorPlan>({
  name: {
    type: Schema.Types.String,
    required: true
  },
  beds: {
    type: Schema.Types.String,
    required: true
  },
  baths: {
    type: Schema.Types.String,
    required: true
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