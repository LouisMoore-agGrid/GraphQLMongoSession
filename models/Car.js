const mongoose = require("mongoose")

const Schema = mongoose.Schema

const carSchema = new Schema(
  {
    make: {
      type: String,
    },

    model: {
      type: String,
    },

    price: {
      type: Number
    }

  },
)

module.exports = mongoose.model("Car", carSchema)