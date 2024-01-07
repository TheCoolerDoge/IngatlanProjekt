const express = require('express')
const path = require("path");
const { Pool } = require("pg");

const app = express()
const routeUser = require('./routes/route-users');
const routeHir = require('./routes/route-hir');
const routeIngatlan = require('./routes/route-ingatlan');
const port  = process.env.PORT || 8080;
const cookieParser = require("cookie-parser");
app.use(cookieParser());
app.set('view engine', 'ejs')
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: false }));
app.use(routeUser);
app.use(routeHir);
app.use(routeIngatlan);






app.listen(port, () => {
  console.log(`App listening at port ${port}`)
})