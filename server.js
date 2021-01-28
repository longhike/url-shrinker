const express = require("express");
const clientRouting = require("./routing/client-render")
const apiRouting = require('./routing/api')

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(clientRouting)
app.use('/api', apiRouting)

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});
