const routes = require("express").Router();

const { User } = require('./app/models');

User.create({ name: "Barbara", email: "barbara@example.com", password_hash: "123456789" }); //até aqui foi a config do banco!

// const authMiddleware = require("./app/middleware/auth");

// const SessionController = require("./app/controllers/SessionController");

// routes.post("/sessions", SessionController.store);

// routes.use(authMiddleware);

// routes.get("/dashboard", (req, res) => {
//   return res.status(200).send();
// });

module.exports = routes;
