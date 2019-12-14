const express = require("express");

const routes = require("./routes");
const app = express();
const port = 3000;

const path = require("path");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/static', express.static(path.join(__dirname, 'public')))

app.use(routes);


app.listen(process.env.PORT || port, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${port}!`);
});