const express = require("express");
const router = express.Router();


router.use("/", require("./swagger"));
router.use('/', require('./auth'));

router.get("/", (req, res) => {
  //#swagger.tags = ['Task Management API is running...']
  res.send("Task Management API is running...");
});

// Import the specific routes
const taskRoutes = require("./tasks");

// Use the routes
// All routes inside tasks.js will now start with /tasks
router.use("/projects", require("./projects"));
router.use("/tasks", taskRoutes);

module.exports = router;
