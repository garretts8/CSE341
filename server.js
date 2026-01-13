const  express = require("express");
const exphbs = require("express-handlebars");
const app = express();
const connectDB = require("./DB/connection");

//To configure Handlebars
app.engine("hbs", exphbs.engine({
    extname:".hbs",
    defaultLayout:false,
    helpers: {}
}));

//Set Handlebars as the view engine
app.set("view engine", "hbs");
app.set("views", "./views");

//Middleware
app.use(express.json({extended: false }));
app.use(express.urlencoded({ extended: true}));

connectDB();

//Routes
app.use("/api/userModel", require("./api/user"));
app.use("/", require("./routes/index"));

const Port = process.env.PORT || 3000;

app.listen(Port, () =>
console.log("Web Server is listening at port " + Port));