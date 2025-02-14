const express = require("express");
const mongoose = require("mongoose");
const Blog = require("../models/Blog");

const router = express.Router();


router.post("/", async (req, res) => {
  try {
    const { title, body, author } = req.body;
    const newBlog = new Blog({ title, body, author });
    await newBlog.save();
    res.status(201).json(newBlog);
  } catch (error) {
    console.error(" Error creating blog:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
});


router.get("/", async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.status(200).json(blogs);
  } catch (error) {
    console.error("Error fetching blogs:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
});


router.get("/:id", async (req, res) => {
  try {
    console.log(" Fetching Blog with ID:", req.params.id);

    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      console.log("Invalid Blog ID!");
      return res.status(400).json({ error: "Invalid Blog ID" });
    }

    const blog = await Blog.findById(req.params.id);
    if (!blog) {
      console.log("❌ Blog Not Found!");
      return res.status(404).json({ error: "Blog not found" });
    }

    console.log(" Blog Found:", blog);
    res.status(200).json(blog);
  } catch (error) {
    console.error("❌ Error fetching blog:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
});


router.put("/:id", async (req, res) => {
    try {
       
        if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
            return res.status(400).json({ error: "Invalid Blog ID" });
        }

        const updatedBlog = await Blog.findByIdAndUpdate(req.params.id, req.body, { new: true });

        
        if (!updatedBlog) {
            return res.status(404).json({ error: "Blog Not Found" });
        }

        res.json(updatedBlog);
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
});

  

router.delete("/:id", async (req, res) => {
    try {
        
        if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
            return res.status(400).json({ error: "Invalid Blog ID" });
        }

        const deletedBlog = await Blog.findByIdAndDelete(req.params.id);

        
        if (!deletedBlog) {
            return res.status(404).json({ error: "Blog Not Found" });
        }

        res.json({ message: "Blog Deleted Successfully" });
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
});


module.exports = router;
