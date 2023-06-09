require("dotenv").config();
const mongoose = require("mongoose");


main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(`${process.env.MONGO_DATABASE}/events`);
  console.log("Mongo database connected!");
}

module.exports = mongoose;
