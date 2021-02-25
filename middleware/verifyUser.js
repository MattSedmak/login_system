const jwt = require("jsonwebtoken");
require("dotenv").config();

const verifyUser = async (req, res, next) => {
  const cookie = req.cookies.jwtToken;

  if (!cookie) return res.render("login.ejs", { message: "Please login!" });

  const validUser = jwt.verify(cookie, process.env.SECRET_KEY);

  if (validUser) {
    req.user = validUser;
  }
  next();
};

module.exports = verifyUser;
