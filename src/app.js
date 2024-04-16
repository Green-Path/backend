const express = require('express')
const path = require('path')
const app = express()
const cookieParser = require("cookie-parser");
app.use(cookieParser());
require('dotenv').config()
const { json } = require('express')
const { conectMongodb } = require("./db/connection");
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken");
app.use(express.json())
app.use(express.urlencoded({ extended: true}))
const port = process.env.PORT || 3000;
app.set("view engine", "hbs")
conectMongodb(process.env.DATABASE_URL).then(() => {
    console.log(`Connection Successfully....`)
}).catch((e) => {
    x
    console.log(`No Connection`)
})




const Register = require("./models/users")

const hbs = require('hbs')
const ejs = require('ejs');
const { error } = require('console');




const static_path = path.join(__dirname, "../public")
app.use(express.static(static_path))

const template_path = path.join(__dirname, "../templates/views")
const partialsPath=path.join(__dirname, "../templates/partials")
app.set("views", template_path)

hbs.registerPartials(partialsPath)

app.set('view engine', 'ejs');
// app.use(express.static(template_path))


const forgotpassroute = require("./routes/forgotpassroute");
const loginroute = require("./routes/loginroute");
const registerroute = require("./routes/registerroute");
const homeroute = require("./routes/homeroute");

const myprofileroute = require("./routes/myprofileroute");

const edit_profile_route = require("./routes/edit_profile_route");


const changepassword=require("./routes/changepassroute");




app.use("/change_password",changepassword)

app.use("/forgotpass", forgotpassroute);
app.use("/login", loginroute);
app.use("/register", registerroute);
app.use("/home", homeroute);

app.use("/myprofile", myprofileroute);

app.use("/edit_profile", edit_profile_route);
app.use("/saved_jobs", savelistroute);






app.get("/", (req, res) => {
   // res.render("landingpage.hbs")
})

app.get("/logout", async(req, res) => {
    try {

        if(req.cookies.jwt){
         res.clearCookie("jwt");
         res.send("<script> alert('logged out succesfully'); window.location = '/login' </script>")
        }else{
            res.send("<script> alert('You are no longer logged in'); window.location = '/' </script>")
        }
        //  res.render('login.hbs');
    } catch (error) {
         res.status(500).send(error);
    }
 })










app.get("*", (req, res) => {
    res.send("Error 404 Invalid Endpoint");
})
app.listen(port, () => {
    console.log(`Server is running in port no ${port}`);
})

