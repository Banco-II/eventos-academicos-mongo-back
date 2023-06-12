const express = require("express");
const app = express();
app.use(express.json());
const eventsRouter = require("./routes/events-router");

const cors = require("cors");
app.use(cors());

app.get("/home", (req, res, next) => {
  res.send("Hello!");
});

app.use("/eventos", eventsRouter);

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`Server running in port ${port}`);
});
