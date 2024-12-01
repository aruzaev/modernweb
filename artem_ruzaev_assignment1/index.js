const express = require("express");
const path = require("path");

const router = express.Router();
const app = express();
const port = 3000;

const courses = require("./routes/courses");
const students = require("./routes/students");

app.use(express.urlencoded({ extended: true }));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

router.get("/", (req, res) => {
  res.render("index", {
    title: "Home",
    message: "Welcome to the home page! Artem Ruzaev - n01497403",
  });
});
app.listen(port, () => console.log(`Server started on port ${port}`));

app.use("/", router);
app.use("/courses", courses);
app.use("/students", students);
