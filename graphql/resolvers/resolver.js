const Car = require("../../models/Car")

module.exports = {
  getRows: async (args) => {
    try {
      let lastRow = undefined
      //skip returns the data from the given index, limit stops at the index given
      const carsFetched = await Car.find().skip("Exercise").limit("Exercise")
      
      //bonus exercise to return the lastRow

      return {
        rows: carsFetched.map((car) => {
                return {
                    make: car.make,
                    model: car.model,
                    price: car.price,
                  _id: car.id,
                }
            }),
      lastRow: lastRow
      }
    } catch (error) {
      throw error
    }
  },
}