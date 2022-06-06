const express = require("express");
const mongoose = require("mongoose");
const app = express();
const route = require("./routes/routes");
mongoose
  .connect(
    "mongodb+srv://username:password@cluster0.yzrqd.mongodb.net/DBName",
    { useNewUrlParser: true }
  )
  .then(() => console.log("Connected"))
  .catch((err) => console.log(err));

app.use(express.json());
app.use("/", route);

app.listen(3000, () => console.log("Server Started"));
