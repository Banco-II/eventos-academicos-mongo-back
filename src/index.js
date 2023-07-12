const express = require("express");
const app = express();
// app.use(express.json());
const eventsRouter = require("./routes/events-router");
const cors = require("cors");

const handleApplicationErrors = require("./middlewares/errors-middlware");
const usersRouter = require("./routes/users-router");

// app.use(cors());

app
  .use(cors())
  .use(express.json())
  .get("/home", (req, res, next) => {
    res.send("Hello!");
  })
  .use("/event", eventsRouter)
  .use("/auth", usersRouter)
  .use(handleApplicationErrors);

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`Server running in port ${port}`);
});
