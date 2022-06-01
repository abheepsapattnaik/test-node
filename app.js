const express = require("express");

const app = express();


app.get("/", (req, res) => {
  res.send("Basic api response");
});

const port = 3200;
app.listen(port, () => {
  console.log(`Node Api listening to port ${port}.`);
});
