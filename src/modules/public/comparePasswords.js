export function comparePasswords(values) {
  const errors = {};

  if (values.password !== values.confirmPassword) {
    errors.confirmPassword = "passwords don't match"
  }

  return errors;
}