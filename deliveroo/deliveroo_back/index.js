const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());

const deliveroo = require("./deliveroo.json");

app.get("/", (req, res) => {
  return res.json(deliveroo);
});

app.listen(process.env.PORT || 3100, () => {
  console.log("Server started");
});
