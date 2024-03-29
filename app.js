const express = require("express");
const morgan = require("morgan");

const app = express();

const postRoutes = require("./routes/post");



//Example - Custom Middlewares
// const customMiddleware = (req, res, next) => {
//   console.log("Applying custom middleware");
//   next();
// };
// app.use(customMiddleware);

app.use(morgan("dev")); // middleware

app.use("/", postRoutes);

const port = 3200;
app.listen(port, () => {
  console.log(`Node Api listening to port ${port}.`);
});
