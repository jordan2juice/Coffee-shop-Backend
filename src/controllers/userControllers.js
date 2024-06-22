"use strict";

const { signToken } = require("../middleware/loginMiddle");
const User = require("../modals/Users");
// const bcrypt = require("bcrypt");

async function register(req, res, next) {
  try {
    const { name, username, email, phone, password } = req.body;
    const user = await User({ name, username, email, phone, password });
    await user.save();
    res.status(201).json({ message: "New user is created.", user });
  } catch (error) {
    next(error);
  }
}

async function login(req, res, next) {
  res.status(200).json({ token: req.token, user: req.user });
}

async function getUser(req, res, next) {
  try {
    const user = await User.find();
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
}


async function deleteUser(req, res, next) {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    res.status(200).json(deletedUser);
  } catch (error) {
    next(error);
  }
}

async function updateUser(req, res, next) {
  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(updatedUser);
  } catch (error) {
    next(error);
  }
}

async function getUserById(req, res, next) {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
}

async function getUserByUsername(req, res, next) {
  try {
    const user = await User.findOne({ username: req.params.username });
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
}

module.exports = {
  register,
  login,
  getUser,
  deleteUser,
  getUserById,
  getUserByUsername,
  updateUser,
};
