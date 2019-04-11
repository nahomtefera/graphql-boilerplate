// Dependencies
const express = require('express');
const graphqlHTTP = require('express-graphql');
const mongoose = require('mongoose');
const cors = require('cors')

// GraphQL
const schema = require('./schema/schema');

// connect to mlab database
mongoose.connect('mongodb://nahom:password123@ds161245.mlab.com:61245/graphql_freecodecamp')
mongoose.connection.once('open', ()=>{
  console.log('connected to database')
})

// Start server
const app = express();
let port = 4000;

// allow cross-origin requests
app.use(cors)

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}))

app.listen(port, ()=>{
  console.log(`now listening for requests on port ${port}`)
})