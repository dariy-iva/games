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
    get options() {
      const daysList = [];
      for (let i = 1; i < 32; i++) {
        daysList.push( i );
      }
      return daysList;
    },
  },
  yearBirth: {
    type: "number",
    label: "Year",
    name: "year",
    get options() {
      const now = new Date();
      const nowYear = now.getFullYear();
      const yearsList = [];
      for (let i = 0; i < (nowYear - 1950 - 18); i++) {
        yearsList.push( 1950 + i );
      }
      return yearsList.reverse();
    },
  },
};