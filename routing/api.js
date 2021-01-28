const express = require("express");
const router = express.Router();
const { v4: uuidv4 } = require("uuid");
const MinifyURL = require("../utils/MinifyURL");

router.post("/test", (req, res) => {
  try {
    let newURL = new MinifyURL(uuidv4(), req.body.url, req.body.alias);
    console.log(newURL.getInfo());
    res.sendStatus(200);
  } catch (err) {
    res.send(err.message);
  }
});

module.exports = router;
