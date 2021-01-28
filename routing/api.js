const express = require("express");
const router = express.Router();
const { v4: uuidv4 } = require("uuid");
const MinifyURL = require("../utils/MinifyURL");
const db = require("../config/db");
const MiniURL = require("../models/MiniURL");

router.post("/minify", async (req, res) => {
  try {
    const newURL = new MinifyURL(uuidv4(), req.body.url, req.body.alias);
    const urlObj = newURL.getInfo()
    const [url, created] = await MiniURL.findOrCreate({
      where: {
        target_url: newURL.target_url
      },
      defaults: urlObj
    })
    console.log(url.mini_url)
    console.log(created)
    res.json(url)
    // MiniURL.create(urlObj)
    // .then(response => res.json(response))
    // .catch(err => console.log(err.message))
  } catch (err) {
    res.send(err.message);
  }
});

module.exports = router;
