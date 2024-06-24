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

userRouter.route("/").get(auth, role, getUser);

userRouter.route("/:id").get(auth, role, getUserById);

userRouter.route("/username").get(auth, role, getUserByUsername);

userRouter.route("/:id").delete(auth, role, deleteUser);

userRouter.route("/:id").put(auth, role, updateUser);

module.exports = userRouter;
