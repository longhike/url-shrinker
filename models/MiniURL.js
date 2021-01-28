const { Sequelize, STRING } = require("sequelize");
const db = require("../config/db");

const MiniURL = db.define("miniurls", {
  id: {
    type: STRING,
    primaryKey: true,
  },
  target_url: {
    type: STRING,
  },
  alias: {
    type: STRING,
  },
  alias_hash: {
    type: STRING,
  },
  base: {
    type: STRING,
  },
  mini_url: {
    type: STRING,
  },
});

module.exports = MiniURL;
