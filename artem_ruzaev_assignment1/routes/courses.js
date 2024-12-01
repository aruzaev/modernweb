const express = require("express");
const router = express.Router();
const { ongoingCourses } = require("../models");

router.get("/", (req, res) => {
  res.render("courses", { ongoingCourses });
});

router.get("/filter", (req, res) => {
  res.render("filterCourses");
});

router.post("/filter", (req, res) => {
  const { id, name, department, isOpen } = req.body;

  let filteredCourses = [];

  for (let i = 0; i < ongoingCourses.length; i++) {
    const course = ongoingCourses[i];

    let match = true;

    if (id && course.id != id) {
      match = false;
    }
    if (name && !course.name.toLowerCase().includes(name.toLowerCase())) {
      match = false;
    }
    if (
      department &&
      !course.department.toLowerCase().includes(department.toLowerCase())
    ) {
      match = false;
    }
    if (isOpen && course.remainingSeats <= 0) {
      match = false;
    }

    if (match) {
      filteredCourses.push(course);
    }
  }
  if (filteredCourses.length > 0) {
    res.render("courses", { ongoingCourses: filteredCourses });
  } else {
    res.status(404).render("404");
  }
});

module.exports = router;
