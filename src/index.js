require("dotenv").config();

const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const app = express();

/* SETUP MIDDLEWARE */

const usersRouter = require("./resources/user/router")

app.disable("x-powered-by");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

const userRouter = require("./resources/user/router");

/* SETUP ROUTES */

<<<<<<< HEAD
app.use("/users", userRouter);
=======
app.use("/users", usersRouter);
>>>>>>> 47ef6cd74c7624a8eab235f0c23e84f8155131dc

app.get("*", (req, res) => {
  res.json({ ok: true });
});

/* START SERVER */

const port = process.env.PORT || 3030;

app.listen(port, () => {
  console.log(`\n🚀 Server is running on http://localhost:${port}/\n`);
});
