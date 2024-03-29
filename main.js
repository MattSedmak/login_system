const cookieParser = require("cookie-parser");
const express = require("express");
const flash = require("connect-flash");
const session = require("express-session");
const connectDB = require("./database/connection");

const app = express();

require("dotenv").config();

// monbodb connection
connectDB();

app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(__dirname + "/public"));

const PORT = process.env.PORT || 8080;

app.set("view engine", "ejs");

app.use(
  session({
    secret: "secret",
    resave: true,
    saveUninitialized: true,
  })
);

app.use(flash());

app.use((req, res, next) => {
  res.locals.success_msg = req.flash("success_msg");
  res.locals.warning_msg = req.flash("warning_msg");
  next();
});

// routers
app.use("/", require("./routes/loginRoute"));
app.use("/", require("./routes/todoRoute"));

// server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
