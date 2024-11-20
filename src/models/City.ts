import { Schema, model } from "mongoose";
import { ICityModel } from "../../Interfaces";

const citySchema = new Schema<ICityModel> ({
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
  ],
  refresh: {
    type: Schema.Types.Number,
    default: Date.now() * 6*60*60*1000
  }
})

const City = model('City', citySchema);

export default City;