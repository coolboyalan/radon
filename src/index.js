const express = require("express");
const bodyParser = require("body-parser");
const route = require("./routes/route.js");
const mongoose = require("mongoose");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose
  .connect(
    "mongodb+srv://coolboyalan:q5uvHFHuERjn6f5K@cluster0.yzrqd.mongodb.net/7june-bookAuthor",
    {
      useNewUrlParser: true,
    }
  )
  .then(() => console.log("Connected to Database"))
  .catch((err) => console.log(err));

app.use("/", route);

app.listen(process.env.PORT || 3000, function () {
  console.log("Express app running on port " + (process.env.PORT || 3000));
});
