const express = require("express");
const router = express.Router();
const { students } = require("../models");

router.get("/", (req, res) => {
  res.render("students", { students });
});

router.get("/filter", (req, res) => {
  res.render("filterStudents");
});

router.post("/filter", (req, res) => {
  const { id, name, department, enrolledCourse, completedCourse } = req.body;

  let filteredStudents = [];

  for (let i = 0; i < students.length; i++) {
    const student = students[i];
    let match = true;

    if (id) {
      if (student.id != id) {
        match = false;
      }
    }

    if (name) {
      if (!student.name.toLowerCase().includes(name.toLowerCase())) {
        match = false;
      }
    }

    if (department) {
      if (
        !student.department ||
        !student.department.toLowerCase().includes(department.toLowerCase())
      ) {
        match = false;
      }
    }

    if (enrolledCourse) {
      let enrolledMatch = false; // no matchh is found yet

      for (let j = 0; j < student.enrolledCourses.length; j++) {
        if (
          student.enrolledCourses[j] &&
          student.enrolledCourses[j].name &&
          student.enrolledCourses[j].name
            .toLowerCase()
            .includes(enrolledCourse.toLowerCase())
        ) {
          enrolledMatch = true;
          break;
        }
      }
      if (!enrolledMatch) {
        match = false;
      }
    }

    if (completedCourse) {
      let completedMatch = false;
      for (let j = 0; j < student.completedCourses.length; j++) {
        if (
          student.completedCourses[j].name
            .toLowerCase()
            .includes(completedCourse.toLowerCase())
        ) {
          completedMatch = true;
          break;
        }
      }
      if (!completedMatch) {
        match = false;
      }
    }

    if (match) {
      filteredStudents.push(student);
    }
  }

  if (filteredStudents.length > 0) {
    res.render("students", { students: filteredStudents });
  } else {
    res.status(404).render("404");
  }
});

router.get("/:id", (req, res) => {
  const student = students.find((student) => student.id == req.params.id);
  if (student) {
    res.render("studentDetail", {
      student,
      avgGrade: student.getAverageGrade(),
    });
  } else {
    res.status(404).send("Student not found");
  }
});

module.exports = router;
