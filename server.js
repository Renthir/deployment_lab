const express = require('express')

const app = express()

app.use(express.json())

app.use(express.static(`${__dirname}/public`))

// include and initialize the rollbar library with your access token
var Rollbar = require('rollbar')
var rollbar = new Rollbar({
  accessToken: 'f9f47b97fb644501982a1376cdbf53f5',
  captureUncaught: true,
  captureUnhandledRejections: true,
})

// record a generic message and send it to Rollbar
rollbar.log('Hello world!')




app.listen(4000, () => console.log('App up on 4000'))