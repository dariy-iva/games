import {nowYear} from "./nowDate";

export const inputsSignFormConfig = {
  name: {
    type: "text",
    label: "Username",
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
    name: "password",
    placeholder: 'At least 6 characters',
  },
  monthBirth: {
    type: "text",
    label: "Month",
    name: "month",
    options: [
      {text: 'January', value: 1},
      {text: 'February', value: 2},
      {text: 'March', value: 3},
      {text: 'April', value: 4},
      {text: 'May', value: 5},
      {text: 'June', value: 6},
      {text: 'July', value: 7},
      {text: 'August', value: 8},
      {text: 'September', value: 9},
      {text: 'October', value: 10},
      {text: 'November', value: 11},
      {text: 'December', value: 12},
    ]
  },
  dayBirth: {
    type: "number",
    label: "Day",
    name: "day",
    get options() {
      const daysList = [];
      for (let i = 1; i < 32; i++) {
        daysList.push({text: i, value: i});
      }
      return daysList;
    },
  },
  yearBirth: {
    type: "number",
    label: "Year",
    name: "year",
    get options() {
      const yearsList = [];
      for (let i = 0; i < (nowYear - 1950 - 16); i++) {
        yearsList.push({text: 1950 + i, value: 1950 + i});
      }
      return yearsList.reverse();
    },
  },
  birthday: {
    type: "date",
    label: "Date of Birth",
    name: "birthday",
  }
};

export const inputsPaymentFormConfig = {
  number: {
    label: '',
    type: 'text',
    name: 'number',
    placeholder: 'Card number',
  },
  name: {
    label: '',
    type: 'text',
    name: 'name',
    placeholder: 'Name on the card',
  },
  date: {
    label: '',
    type: 'text',
    name: 'date',
    placeholder: 'Date',
  },
  code: {
    label: '',
    type: 'password',
    name: 'code',
    placeholder: 'CVC',
  },
};