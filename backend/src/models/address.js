const mongoose = require('mongoose');

const addressSchema = new mongoose.Schema({
    addressLine1: {
      type: String,
      required: true
    },
    addressLine2: {
      type: String,
      required: true
    },
    city: {
      type: String,
      required: true
    },
    province: {
      type: String,
      required: true
    },
    postalCode: {
      type: String,
      required: true
    },
    country: {
      type: String,
      required: true
    }
});

const Address = mongoose.model('address', addressSchema);

module.exports = Address;