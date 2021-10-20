const { buildSchema } = require("graphql")

module.exports = buildSchema(`

type Car {
    _id: ID!
    make: String!
    model: String!
    price: Int!
}

type rowsAndLastIndex {
//exercise
}

type Query {
    getRows(startRow: Int!, endRow: Int): rowsAndLastIndex
}

schema {
    query: Query
}

`)