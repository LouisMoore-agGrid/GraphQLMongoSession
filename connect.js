const express = require("express")
const {graphqlHTTP} = require("express-graphql")
const graphqlSchema = require("./graphql/schema/schema")
const graphqlResolvers = require("./graphql/resolvers")
const cors = require("cors");
const mongoose  = require("mongoose");
 
                                                                                                                                     
const url = "mongodb://127.0.0.1:27017";

const app = express();
app.use(cors());

app.use('/graphql', graphqlHTTP({
    schema: graphqlSchema,
    rootValue: graphqlResolvers,
    graphiql: true,
  }));
  mongoose
  .connect(url)
  .then(()=> app.listen(4000), console.log('Running a GraphQL API server at http://localhost:4000/graphql') )
  .catch(error=>{
    console.log(error)
  })