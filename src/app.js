const express = require('express')
const path = require('path')
const app = express()
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
app.use(bodyParser.json());

require('dotenv').config()
const { json } = require('express')
const { conectMongodb } = require("./db/connection");
const cors=require('cors');
app.use(cors({
    origin:'*',
    credentials:true
}))

app.use(express.json())
app.use(express.urlencoded({ extended: true}))
const port = process.env.PORT || 5000;

mongoose.connect("mongodb+srv://theshekhargupta125:Shekhargupta125@cluster0.rba8f2y.mongodb.net/greenpath")
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
      console.error('Error connecting to MongoDB:', err);
    });
    
app.listen(port, () => {
    console.log(`Server is running in port no ${port}`);
})

    
    
    // const users = require("./models/users")
    const Blog = require("./models/Blogs")
    const Product = require("./models/products")
    const appliance = require("./models/appliances")
    




app.get("/", (req, res) => {
   res.send("helloo");
})
app.post("/addblog",async (req, res) => {
    try {
        // Extract title and text from request body
        const { title, description } = req.body;
    
        // Create a new instance of the Blog model
        const newBlog = new Blog({
          title: title,
          text: description
        });
        //console.log("saved")
        // Save the new blog post to the database
        await newBlog.save();
    
        // Send a success response
        res.status(201).send("Blog post added successfully");
      } catch (err) {
        console.error("Error adding blog post:", err);
        res.status(500).send("Internal Server Error");
      }


 })
// app.get("/kitchen", (req, res) => {


//  })
app.get("/blogs", async (req, res) => {

    console.log("ok");
    try {
      const blogs = await Blog.find({});
      //console.log(blogs);
      // Store the data in JSON format
      const jsonData = blogs.map(blog => ({
        title: blog.title,
        text: blog.text
      }));
      
      // Send the JSON data as the response
      res.json(jsonData);
    } catch (err) {
      console.error("Error finding blogs:", err);
      res.status(500).send("Internal Server Error"); // Send an error response if there's an error
    }
  });

  app.post("/products", async (req, res) => {
    try {
        const { type, minPrice, maxPrice } = req.body;

        // Build the query based on the constraints
        const query = {
            type: type,
            price: { $gte: minPrice, $lte: maxPrice }
        };
        // Find products that satisfy the constraints and sort them by price in ascending order
        const products = await Product.find(query).sort({ price: 1 });

        console.log(products);
        res.json(products);
    } catch (error) {
        console.error("Error fetching products:", error);
        res.status(500).send("Internal Server Error");
    }
});

  
  













// app.get("*", (req, res) => {
//     res.send("Error 404 Invalid Endpoint");
// })

