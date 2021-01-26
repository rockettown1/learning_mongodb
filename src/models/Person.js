const mongoose = require("mongoose");

const personSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  age: {
    type: Number,
  },
  likesPizza: {
    type: Boolean,
  },
});

const Person = mongoose.model("Person", personSchema);

module.exports = {
  Person,
};
