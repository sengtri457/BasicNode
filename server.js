require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 3000;
const MONGO_URL = process.env.MONGODB_URL;
const userRouters = require("./Routers/user.routes");
// Connected To MOngoDB;
app.use(express.json());
app.use("/api/users", userRouters);
mongoose
  .connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDb Connected Succesful!");
    app.listen(PORT, () => {
      console.log("App Listen To Port:" + PORT);
    });
  })
  .catch((err) => {
    console.log("Connect Was Error: " + err);
  });
