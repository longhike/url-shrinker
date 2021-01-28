const express = require("express");
const clientRouting = require("./routing/client-render");
const apiRouting = require("./routing/api");
const db = require("./config/db");

const app = express();

const PORT = process.env.PORT || 3000;

db.authenticate()
  .then(() => console.log("DB connected"))
  .catch((err) => console.log(err.message));

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(clientRouting);
app.use("/api", apiRouting);

db.sync().then(() => {
  app.listen(PORT, () => {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});
