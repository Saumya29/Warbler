const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

const errorHandler = require("./handlers/errors");


const PORT = 8081;

app.use(cors());
app.use(bodyParser.json());

//routes come here

app.use(function(req, res, next) {
  let err = new Error("Not Found");
  err.status = 404;
  next(err);
});

app.use(errorHandler);

app.listen(PORT, function() {
  console.log(`Server listening on PORT ${PORT}`);
});