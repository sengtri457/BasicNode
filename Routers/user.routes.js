const express = require("express");
const routers = express.Router();
const {
  getUsers,
  addUsers,
  getById,
  deletedUser,
  updateById,
} = require("../Controllers/userControllers");

routers.get("/", getUsers);
routers.post("/", addUsers);
routers.get("/:id", getById);
routers.delete("/:id", deletedUser);
routers.put("/:id", updateById);
module.exports = routers;
