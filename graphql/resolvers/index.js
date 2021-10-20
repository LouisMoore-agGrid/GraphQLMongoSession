const Car = require("../../models/Car")

module.exports = {
  getRows: async (args) => {
    try {
      let lastRow = undefined
      const carsFetched = await Car.find().skip(args.startRow).limit(args.endRow)
      if(carsFetched.length< args.endRow - args.startRow){
        lastRow = carsFetched.length + args.startRow
      }
      return {rows: carsFetched.map((car) => {
        return {
            make: car.make,
            model: car.model,
            price: car.price,
          _id: car.id,
        }
      }), lastRow: lastRow}
    } catch (error) {
      throw error
    }
  },
}