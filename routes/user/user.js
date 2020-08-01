const Router = require("express").Router();
const User = require("../../models/User");

Router.get("/", aysnc (req, res) => {
  // User.findOne({
  //   userUUID : req.user
  // })
  return res.json(req.user);
});

Router.post("/", async (req, res) => {
  const { userInfo } = req.body;
  const name = userInfo.name;
  const userUUID = req.user.user_id;
  const mobile = req.user.phone_number;
  const user = new User({
    name, userUUID,mobile
  })
  await user.save()

  return res.json(user);
});

module.exports = Router;
