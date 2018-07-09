import mongoose from 'mongoose';

const citySchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  capital: {
    type: Boolean,
    required: [true, 'The capital is required.'],
    validate: {
      validator: (value) => {
        return typeof value === 'boolean';
      },
      message: 'Capital value must be boolean',
    },
  },
  location: {
    type: Object,
  },
});

export default mongoose.model('Cities', citySchema);
