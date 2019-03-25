// generic function that responds with the status of error

function errorHandler(err, req, res, next) {
  return res.status(err.status || 500).json({
    error: {
      message: err.message || "Oops! Something went wrong"
    }
  })
}

module.exports = errorHandler;
