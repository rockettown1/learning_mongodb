require("./db/connection");
const { Person } = require("./models/Person");

const app = async () => {
  const person = new Person({ name: "Dan", email: "dan@email.com", age: 35, likesPizza: true });
  await person.save();
};

app();
