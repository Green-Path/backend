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

mongoose.connect("mongodb://127.0.0.1:27017/Randome")
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });




const users = require("./models/users")
const Blog = require("./models/blogs")





const forgotpassroute = require("./routes/forgotpassroute");
const loginroute = require("./routes/loginroute");
const registerroute = require("./routes/registerroute");
const homeroute = require("./routes/homeroute");

const myprofileroute = require("./routes/myprofileroute");

const edit_profile_route = require("./routes/edit_profile_route");


const changepassword=require("./routes/changepassroute");
const productroute=require("./routes/productroute");



app.use("/change_password",changepassword)

app.use("/forgotpass", forgotpassroute);
app.use("/login", loginroute);
app.use("/register", registerroute);
app.use("/home", homeroute);

app.use("/myprofile", myprofileroute);

app.use("/edit_profile", edit_profile_route);
app.use("/saved_jobs", savelistroute);

app.use("/products",productroute);




app.get("/", (req, res) => {
   // res.render("landingpage.hbs")
})

app.get("/kitchen", (req, res) => {
    
 })

 app.get("/blogs", (req, res) => {
    
    Blog.find({}, (err, blogs) => {
        if (err) {
          console.error("Error finding blogs:", err);
          return;
        }
        
        // Store the data in JSON format
        const jsonData = blogs.map(blog => ({
          title: blog.title,
          text: blog.text
        }));
      
        console.log(jsonData); // Output the JSON data
      });

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

