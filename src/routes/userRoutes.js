"use strict";

const express = require("express");
const {
  register,
  login,
  getUser,
  getUserByUsername,
  getUserById,
  deleteUser,
  updateUser,
} = require("../controllers/userControllers");
const auth = require("../middleware/auth");
const { role } = require("./roles");
const {
  checkEmail,
  checkPassword,
  signToken,
} = require("../middleware/loginMiddle");
const userRouter = express.Router();

userRouter.route("/register").post(register);

userRouter.route("/login").post(checkEmail, checkPassword, signToken, login);

userRouter.route("/").get(auth, role(["admin"]), getUser);

userRouter.route("/:id").get(auth, role(["admin"]), getUserById);

userRouter.route("/username").get(auth, role(["admin"]), getUserByUsername);

userRouter.route("/:id").delete(auth, role(["admin"]), deleteUser);

userRouter.route("/:id").put(auth, role(["admin"]), updateUser);

module.exports = userRouter;
