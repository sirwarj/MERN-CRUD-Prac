const express = require("express");
const router = express.Router();
const User = require("../models/User");

const { createRegister, login, currentUser } = require("../controllers/auth");

// Middleware
const { auth } = require("../middleware/auth");

// @route POST  localhost:8080/api/register
// @desc route register
// @access Public
router.post("/register", createRegister);

// @route POST  localhost:8080/api/login
// @desc route login
// @access Public
router.post("/login", login);

// @route POST  localhost:8080/api/current-user
// @desc route current-user
// @access Private
router.post("/current-user", auth, currentUser);

// @route POST  localhost:8080/api/current-admin
// @desc route current-admin
// @access Private
router.post("/current-user", auth, currentUser);

module.exports = router;
