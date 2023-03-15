const errorLogger = (err, req, res, next) => {
  console.error("[ERROR LOGGER] ", err.stack);
  next(err);
}

module.exports = errorLogger;