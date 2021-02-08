const express = require("express");
const router = express.Router();
const { v4: uuidv4 } = require("uuid");
const MinifyURL = require("../utils/MinifyURL");
const db = require("../config/db");
const MiniURL = require("../models/MiniURL");

// router.get("/r/*", (req, res) => {
//   const search_param = req.params["0"];
//   if (search_param.length <= 0) {
//     return;
//   } else {
//     MiniURL.findOne({
//       where: {
//         alias_hash: search_param,
//       },
//     })
//     .then((response) => res.redirect(response.dataValues.target_url))
//     .catch(err => console.log(err.message))
//   }
// });
router.post("/api/minify", async (req, res) => {
  try {
    const newURL = new MinifyURL(uuidv4(), req.body.url, req.body.alias);
    const urlObj = newURL.getInfo();
    const [url, created] = await MiniURL.findOrCreate({
      where: {
        target_url: newURL.target_url,
      },
      defaults: urlObj,
    });
    res.json(url);
  } catch (err) {
    res.send(err.message);
  }
});

module.exports = router;
