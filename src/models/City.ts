import { Schema, model } from "mongoose";
import { ICity } from "../../Interfaces";

const citySchema = new Schema<ICity> ({
  cityName: {
    type: Schema.Types.String,
    required: true
  },
  state: {
    type: Schema.Types.String,
    required: true
  },
  properties: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Property'
    }
  ]
})

const City = model('City', citySchema);

export default City;