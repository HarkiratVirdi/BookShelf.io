const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema(
  {
    bookIds: {
      type: [{ type: String }],
      required: true,
    },
    totalPrice: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Order = mongoose.model('order', orderSchema);

module.exports = Order;
