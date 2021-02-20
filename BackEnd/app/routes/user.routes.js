module.exports = (app) => {
  const users = require("../controllers/user.controller.js");

  // Create a new user
  app.post("/users", users.create);

  // Retrieve all users /*Working*/
  app.get("/users", users.findAll);

  // Retrieve a single user with userId  /*Working*/
  app.get("/users/:userId", users.findOne);

  // Update a user with userId
  app.put("/users/:userId", users.update);

  // Delete a user with userId /*Working*/
  app.delete("/users/:userId", users.delete);

  // delete all users
  app.delete("/users", users.deleteAll);
};
