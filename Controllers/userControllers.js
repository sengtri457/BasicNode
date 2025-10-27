const User = require("../Models/User");
const { param } = require("../Routers/user.routes");

// get Users

const getUsers = async (req, res) => {
  const users = await User.find();
  if (users.length === 0) {
    return res.status(404).json({ message: "No Users Found" });
  }
  return res.status(200).json(users);
};

// add Users

const addUsers = async (req, res) => {
  try {
    const users = await User.create(req.body);
    res.status(202).json(users);
    res.status(202).json({ message: "add User Successful" });
  } catch (error) {
    res.status(404).json({ error: "User add Fails" });
  }
};

// getById

const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const FindUser = await User.findById(id);
    if (!FindUser) {
      res.status(404).json({ error: "Id Doesnt Match Users" });
    }
    res.status(202).json(FindUser);
  } catch (error) {
    res.status(404).json({ error: "User Finds Fails" });
  }
};

// deleted

const deletedUser = async (req, res) => {
  try {
    const { id } = req.params;
    const deltedUser = await User.findByIdAndDelete(id);
    if (!deltedUser) {
      res.status(404).json({ error: "User Deleted Not Successful!" });
    }
    res.status(202).json({ message: "Deleted User Successful!" });
  } catch (error) {
    res.status(404).json({ error: "User Deleted Fails" });
  }
};

// update By Id

const updateById = async (req, res) => {
  try {
    const { id } = req.params;
    const updateeUsers = await User.findByIdAndUpdate(id, req.body);
    if (!updateeUsers) {
      res.status(404).json({ error: "User Updated Not Successful!" });
    }

    const newDataUserUpdate = await User.findById(id);
    res.status(202).json(newDataUserUpdate);
    res.status(202).json({ message: "User Update Sucessful" });
  } catch (error) {
    res.status(404).json({ error: "User Update Fails" });
  }
};

module.exports = {
  getUsers,
  addUsers,
  getById,
  deletedUser,
  updateById,
};
