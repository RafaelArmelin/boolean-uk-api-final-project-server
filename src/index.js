require("dotenv").config();

const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const app = express();

/* SETUP MIDDLEWARE */

app.disable("x-powered-by");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

const userRouter = require("./resources/user/router");
const profileRouter = require("./resources/profile/router");
const questionsRouter = require("./resources/questions/router");

/* SETUP ROUTES */

app.use("/users", userRouter);
app.use("/profile", profileRouter);
app.use("/questions", questionsRouter);

app.get("*", (req, res) => {
  res.json({ ok: true });
});

/* START SERVER */

const port = process.env.PORT || 3030;

app.listen(port, () => {
  console.log(`\n🚀 Server is running on http://localhost:${port}/\n`);
});
