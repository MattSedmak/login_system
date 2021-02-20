const cookieParser = require("cookie-parser");
const express = require("express");
const flash = require("connect-flash");
const session = require("express-session");
const connectDB = require("./database/connection");

const app = express();

require("dotenv").config();

// *** monbodb connection ***
connectDB();

// *** adds the form to our body property of the request ***
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

const PORT = process.env.PORT || 8080;

// *** adds the form to our body property of the request ***
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

// *** load routers ***
app.use("/", require("./routes/loginRoute"));
app.use("/", require("./routes/todoRoute"));

// *** create local server ***
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
