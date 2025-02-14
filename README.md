This is a CRUD API for a blogging platform built using Node.js, Express, and MongoDB.

It allows users to Create, Read, Update, and Delete (CRUD) blog posts.

Technologies Used
Node.js – Backend runtime
Express.js – Web framework
MongoDB & Mongoose – Database & ODM
dotenv – For environment variables

To run write npm run dev on the terminal and then run the API endpoints on postman.


Method	      Endpoint	      Description
POST         /api/blogs	        Create a new blog
GET	         /api/blogs	        Get all blogs
GET	      /api/blogs/:id	    Get a blog by ID
PUT	      /api/blogs/:id	    Update a blog by ID
DELETE	  /api/blogs/:id        Delete a blog by ID