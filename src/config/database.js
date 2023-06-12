const mongoose = require("mongoose");

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/events");
  console.log("Mongo database connected!");
}

module.exports = mongoose;
