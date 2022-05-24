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
};