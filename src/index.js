const express = require("express");
const bodyParser = require("body-parser");
const route = require("./routes/route.js");
const middleware = require("./middlewares/globalMiddlewares");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(middleware.global);
app.use("/", route);

app.listen(process.env.PORT || 3000, function () {
  console.log("Express app running on port " + (process.env.PORT || 3000));
});
