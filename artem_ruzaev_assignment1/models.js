class Course {
  constructor(id, name, department, description) {
    this.id = id;
    this.name = name;
    this.department = department;
    this.description = description;
  }
}

class CompletedCourse extends Course {
  constructor(id, name, department, description, grade) {
    super(id, name, department, description);
    this.grade = grade;
  }
}

class OngoingCourse extends Course {
  constructor(id, name, department, description, remainingSeats) {
    super(id, name, department, description);
    this.remainingSeats = remainingSeats;
  }
}

class Student {
  constructor(
    id,
    name,
    department,
    semester,
    enrolledCourses = [],
    completedCourses = []
  ) {
    this.id = id;
    this.name = name;
    this.department = department;
    this.semester = semester;
    this.enrolledCourses = enrolledCourses;
    this.completedCourses = completedCourses;
  }

  getAverageGrade() {
    const total = this.completedCourses.reduce(
      (acc, course) => acc + course.grade,
      0
    );
    return total / this.completedCourses.length || 0;
  }
}

const ongoingCourses = [
  new OngoingCourse(
    1,
    "CPAN-213",
    "Computer Programming",
    "Learn to develop cross-platform mobile applications.",
    3
  ),
  new OngoingCourse(
    2,
    "CPAN-211",
    "Computer Programming",
    "An in-depth look at data structures and algorithms.",
    3
  ),
  new OngoingCourse(
    3,
    "CPAN-214",
    "Computer Programming",
    "Study high-level programming languages and paradigms.",
    10
  ),
  new OngoingCourse(
    4,
    "CPAN-212",
    "Computer Programming",
    "Explore modern web development technologies.",
    7
  ),
];

const students = [
  new Student(
    1,
    "Leonardo DiCaprio",
    "Mathematics",
    2,
    [ongoingCourses[0]],
    [new CompletedCourse(1, "Math 100", "Mathematics", "Basic Math", 80)]
  ),
  new Student(
    2,
    "Scarlett Johansson",
    "Computer Programming",
    3,
    [ongoingCourses[1]],
    [new CompletedCourse(2, "CS 100", "Computer Science", "Basics of CS", 85)]
  ),
  new Student(
    3,
    "Denzel Washington",
    "Computer Programming",
    4,
    [ongoingCourses[2]],
    [
      new CompletedCourse(
        3,
        "Data Structures",
        "Computer Programming",
        "Advanced Algorithms",
        92
      ),
    ]
  ),
  new Student(
    4,
    "Meryl Streep",
    "Mathematics",
    1,
    [ongoingCourses[3]],
    [
      new CompletedCourse(
        4,
        "Intro to Calculus",
        "Mathematics",
        "Basic Calculus",
        88
      ),
    ]
  ),
  new Student(
    5,
    "Tom Hanks",
    "Information Systems",
    2,
    [ongoingCourses[0]],
    [
      new CompletedCourse(
        5,
        "Systems Design",
        "Information Systems",
        "Fundamentals of Systems Design",
        78
      ),
    ]
  ),
  new Student(
    6,
    "Jennifer Lawrence",
    "Cybersecurity",
    1,
    [ongoingCourses[2]],
    [
      new CompletedCourse(
        6,
        "Intro to Networking",
        "Cybersecurity",
        "Networking Basics",
        83
      ),
    ]
  ),
  new Student(
    7,
    "Morgan Freeman",
    "Computer Programming",
    3,
    [ongoingCourses[3]],
    [
      new CompletedCourse(
        7,
        "Object-Oriented Programming",
        "Computer Science",
        "OOP Concepts",
        90
      ),
    ]
  ),
];

module.exports = { ongoingCourses, students };
