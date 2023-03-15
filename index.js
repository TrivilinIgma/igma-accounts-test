const express = require('express');
const errorHandler = require('./src/middlewares/errorHandler');
const errorLogger = require('./src/middlewares/errorLogger');
const errorNotFound = require('./src/middlewares/errorNotFound');
const clientRoutes = require("./src/routes/clientRoutes")
const app = express()

app.use(express.urlencoded({ extended: true}))
app.use(express.json())

app.use('/clients', clientRoutes)

app.use(
    errorNotFound, 
    errorLogger, 
    errorHandler
  );

app.listen(3000, () => {
    console.log('http://localhost:3000')
})