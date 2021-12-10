var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var cors = require("cors");

//운영환경 설정
const dotenv = require("dotenv");
dotenv.config();

const usersRouter = require("./routes/user/index");
const rstRouter = require("./routes/restaurant/index");
const adRouter = require("./routes/ad/index");
const cpRouter = require("./routes/coupon/index");
const favRouter = require("./routes/favorite/index");

const app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());
app.disable("etag");

//라우터 경로 설정
app.use("/r", rstRouter);
app.use("/users", usersRouter);
app.use("/ad", adRouter);
app.use("/cp", cpRouter);
app.use("/fav", favRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
