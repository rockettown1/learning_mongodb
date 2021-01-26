require("./db/connection");
const { Person } = require("./models/Person");
const { Task } = require("./models/Task");

const app = async () => {
  try {
    const person = new Person({ name: "Emily", email: "emily@email.com", age: 35, likesPizza: true });
    await person.save();

    const task = new Task({ task: "feed the dog", completed: true });
    await task.save();

    const everything = await Person.find({});
    console.log(everything);

    // const response = await Person.updateOne({ name: "Emily" }, { email: "emily@em.com" });
    // console.log(response);
    await Person.deleteMany();
  } catch (error) {
    console.log(error);
  }
};

app();
