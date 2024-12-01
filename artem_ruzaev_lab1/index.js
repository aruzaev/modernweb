// Artem Ruzaev
// Lab 1
// 9/23/24

const _ = require("lodash");

class Holiday {
  constructor(name, date) {
    this.name = name;
    this.date = new Date(date);
  }

  daysUntil() {
    const today = new Date();
    const difference = this.date - today;
    return Math.abs(Math.floor(difference / (1000 * 60 * 60 * 24)));
  }
}

const holidays = [
  new Holiday("Christmas", "2024-12-25"),
  new Holiday("Canada Day", "2025-07-01"),
  new Holiday("New Year's Day", "2025-01-01"),
  new Holiday("Thanksgiving", "2024-10-14"),
  new Holiday("Easter", "2025-04-20"),
];

holidays.forEach((holiday) => {
  {
    console.log(`${holiday.name} is in ${holiday.daysUntil()} days`);
  }
});

const random = _.sample(holidays);

console.log(`Random holiday is ${random.name} which is on ${random.date}`);

console.log(
  `Christmas is at index: ${_.findIndex(holidays, { name: "Christmas" })}`
);

console.log(
  `Canada Day is at index: ${_.findIndex(holidays, { name: "Canada Day" })}`
);
