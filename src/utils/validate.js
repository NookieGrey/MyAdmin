const rulesMap = {
  required: value => !value && "fill this input, please",
  email: value => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const isEmail = re.test(String(value).toLowerCase());
    if (!isEmail) return "Invalid email address";
  },
  minLength: options => value => value.length < options.length && `min length ${options.length}`
}

export function validate(rules) {
  return value => {
    if (!rules) return false;

    if (Array.isArray(rules)) {
      for (let rule of rules) {

        if (typeof rule === "object") {
          let error = rulesMap[rule.type](rule)(value);
          if (error) return error;
        }

        if (typeof rule === "string") {
          let error = rulesMap[rule](value);
          if (error) return error;
        }
      }
    }

    if (typeof rules === "string") {
      return rulesMap[rules](value);
    }
  }
}