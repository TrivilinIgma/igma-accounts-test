const express = require('express');
require('express-async-errors');
const errorHandler = require('./src/middlewares/errorHandler');
const errorLogger = require('./src/middlewares/errorLogger');
const clientRoutes = require("./src/routes/clientRoutes")
const app = express()

app.use(express.urlencoded({ extended: true}))
app.use(express.json())

app.use('/clients', clientRoutes)

app.use(
    errorLogger, 
    errorHandler
  );

app.listen(3000, () => {
    console.log('http://localhost:3000')
})