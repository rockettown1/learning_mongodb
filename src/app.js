require("./db/connection");
const { Person } = require("./models/Person");
const { Task } = require("./models/Task");

const app = async () => {
  try {
    const person = new Person({ name: "Emily", email: "emily@email.com", age: 35, likesPizza: true });
    // CREATE (add a document to your db collection)
    await person.save();

    const task = new Task({ task: "feed the dog", completed: true });
    await task.save();

    //READ (You can find one or many documents in your database)
    const everything = await Person.find({});
    console.log(everything);

    //UPDATE (You can update individual documents or many at a time)
    //await Person.updateOne({ name: "Emily" }, { email: "emily@em.com" });

    //DELETE (You can delete many or individual items from your database)
    await Person.deleteMany();

    //Mongoose docs to queries
    //https://mongoosejs.com/docs/queries.html
  } catch (error) {
    console.log(error);
  }
};

app();

/* 
CRUD
CREATE - instance.save( )
READ - model.find(), .findOne()
UPDATED - .update, updateOne, updateMany
DELETE - deleteOne, deleteMany
*/
