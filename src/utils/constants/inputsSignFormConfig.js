export const inputConfig = {
  name: {
    type: "text",
    label: "Username",
    minLength: "2",
    maxLength: "30",
    name: "name",
    placeholder: 'Enter username',
  },
  email: {
    type: "email",
    label: "Email",
    name: "email",
    placeholder: 'Enter email',
  },
  password: {
    type: "password",
    label: "Password",
    minLength: "6",
    name: "password",
    placeholder: 'At least 6 characters',
  },
  monthBirth: {
    type: "text",
    label: "Month",
    name: "month",
    options: [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ]
  },
  dayBirth: {
    type: "number",
    label: "Day",
    name: "day",
    options: [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31
    ]
  },
  yearBirth: {
    type: "number",
    label: "Year",
    name: "year",
    options: [
      1950, 1960, 1970, 1980, 1990, 2000
    ]
  },
};