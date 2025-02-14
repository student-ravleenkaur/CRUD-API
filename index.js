require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const blogRoutes = require("./routes/blogRoutes");
const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;
app.use(express.json());
mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log(" MongoDB Connected Successfully!"))
  .catch((err) => console.error(" MongoDB Connection Error:", err));
app.use(express.static("public"));
app.use("/api/blogs", blogRoutes);

  app.listen(PORT,()=>{
    console.log(`Server running on http://localhost:${PORT}`);
});
