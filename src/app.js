import express from "express";
const app = express();
// const bodyParser = require("body-parser");
const port = 3000;
// this app.listen is a call back function used to listen for ports
const verifyTime = (req, res, next) => {
  console.log("hors");
  const now = new Date();
  const hours = now.getHours();
  const day = now.getDay();
  if ((day >= 1 && day <= 5, hours >= 20 && hours <= 23)) {
    next();
  } else {
    res.send("oops! This application only works( Monday to Friday) 9am-5pm");
  }
};
// call the verifyTime as a middleware
// app.use is usuall used when you want to use it in your entire request
// else if you want to use it on one request or route,just put it in the middle of the controller before the route.
// app.use(verifyTime);
// set view engine to be ejs
app.set("view engine", "ejs");
app.get("/", verifyTime, (req, res) => {
  res.render("home");
});
// call function to give us todays date
// to check the current day
// you can getDay, getHours etc

app.set("view engine", "ejs");
app.get("/services", (req, res) => {
  res.render("services");
});
app.listen(port, () => {
  console.log(`server is running on ${port}`);
});
