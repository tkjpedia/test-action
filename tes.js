const { nanoid } = require("nanoid");

random = () => {
  f = nanoid();
  return f;
};

console.log(random());
