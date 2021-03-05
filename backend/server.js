const express = require("express");
const app = express();

const PORT = 8000;
app.use("/", express.static("../frontend/apiwars/build"));

app.listen(PORT, function () {
  console.log("Express server listening on port ", PORT); // eslint-disable-line
});
