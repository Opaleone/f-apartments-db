import { Schema, model } from 'mongoose';
import { IDetails } from '../../Interfaces';

const detailSchema = new Schema<IDetails>({
  price: {
    type: Schema.Types.String,
    required: true
  },
  sqFt: {
    type: Schema.Types.String,
    required: true
  },
  whenAvailable: {
    type: Schema.Types.String
  }
});

const Detail = model('Detail', detailSchema);

export default Detail;