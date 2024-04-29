// Importing Express library
const express = require("express");

// Creating a new Express router
const route = express.Router();

// Importing userController module
const userController = require("../Controllers/user.controller");

// Setting up a POST request handler for the /user/signup route
// This will delegate the request handling to the signup method of the userController module
route.post("/signup", userController.signup);

// Exporting the configured router to be used in other parts of the application
module.exports = route;
