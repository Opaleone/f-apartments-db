import { Schema, model } from 'mongoose';
import { IProperty } from '../../Interfaces';

const propertySchema = new Schema<IProperty>({
  propertyName: {
    type: Schema.Types.String,
    required: true
  },
  address: {
    type: Schema.Types.String,
  },
  phone: {
    type: Schema.Types.String
  },
  leasingOffice: {
    type: Schema.Types.String
  },
  floorPlans: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Floorplan'
    }
  ],
});

const Property = model('Property', propertySchema);

export default Property;