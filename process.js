const MinifyURL = require("./utils/MinifyURL")
const { v4: uuidv4, parse, stringify } = require("uuid");

const store = [];

let test = {
  id: uuidv4(),
  url: "http://www.google.com/",
  alias: "google",
};

const url = new MinifyURL(test.id, test.url, test.alias);

console.log(url.getMini());
