require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const productRoutes = require("./routes/products");

//Express app
const app = express();

// Middleware
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//Routes
app.use("/api/products", productRoutes);

//Conenect to db
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    //Listening
    const port = 4000;
    app.listen(process.env.PORT, () => {
      console.log("Connected to db and listening on port =", process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });

// require("./db");

// const pictureRouter = require("./routes/picture");
// app.use("/pictures", pictureRouter);
