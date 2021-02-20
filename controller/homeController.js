// Start sidan
exports.showStart = (req, res) => {
  try {
    res.render("index.ejs", { message: "" });
  } catch (err) {
    console.log(err);
  }
};

// Logout
exports.logout_get = (req, res) => {
  res.clearCookie("jwtToken");
  req.flash("success_msg", "You are now logged out!");
  res.redirect("/");
};
