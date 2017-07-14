var jwt = require("jsonwebtoken");
var jwtConfig = require("../jwtConfig");
var express = require("express");
var loginRoute = express.Router();

loginRoute.post("/", function(req, res, next) {
  var token = jwt.sign({ user: "Zach" }, jwtConfig.secret, {
    expiresIn: 60 * 60 * 24
  });

  res.json({
    token: token
  });
});
module.exports = loginRoute;
