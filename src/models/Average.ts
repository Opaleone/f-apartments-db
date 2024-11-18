import { Schema, model } from 'mongoose';
import { IAverage } from '../../Interfaces';

const averageSchema = new Schema<IAverage>({
  price: {
    type: Schema.Types.Number,
    required: true
  },
  sqFt: {
    type: Schema.Types.String,
    required: true
  },
  whenAvailable: {
    type: Schema.Types.String,
    required: true
  }
});

const Average = model('Average', averageSchema);

export default Average;