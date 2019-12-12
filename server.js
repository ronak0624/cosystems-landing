const express = require("express");

const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

const path = require("path");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/static', express.static(path.join(__dirname, 'public')))

app.use(routes);


app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});