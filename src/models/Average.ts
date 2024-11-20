import { Schema, model } from 'mongoose';
import { IAverage } from '../../Interfaces';

const averageSchema = new Schema<IAverage>({
  price: {
    type: Schema.Types.Number,
  },
  sqFt: {
    type: Schema.Types.String,
  },
  whenAvailable: {
    type: Schema.Types.String,
  }
});

const Average = model('Average', averageSchema);

export default Average;