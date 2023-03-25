export const validate = (values) => {
  const errors = {};
  const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,3})+$/;

  if (!values.email) {
    errors.email = "Email is required!";
  } else if (!emailRegex.test(values.email)) {
    errors.email = "This is not a valid email!";
  }

  if (!values.password) {
    errors.password = "Password is required!";
  } else if (values.password.length < 6) {
    errors.password = "Password should be at least 5 characters long!";
  }

  if (values.password !== values.rePassword) {
    errors.rePassword = "Passwords don't match!";
  }

  return errors;
};

// if (!values.country) {
//   errors.country = "Country is required!";
// } else if (values.country) {
//   const firstLetter = values.country[0];
//   if (firstLetter !== firstLetter.toUpperCase()) {
//     errors.country = "Country name should start with a capital letter!";
//   }
// }
