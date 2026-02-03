const express = require("express");
const router = express.Router();
const tasksController = require("../controllers/tasks");
const { taskValidationRules, validate } = require("../middleware/validate");
const { isAuthenticated } = require("../middleware/authenticate");

// @route   GET /tasks
// No validation needed for fetching
router.get("/", tasksController.getTasks);

// @route   GET /tasks/:id
router.get("/:id", tasksController.getTaskById);

// @route   POST /tasks
// 1. Check rules -> 2. Handle validation errors -> 3. Run controller
router.post(
  "/",
  isAuthenticated,
  taskValidationRules(),
  validate,
  tasksController.createTask,
);

// @route   PUT /tasks/:id
router.put(
  "/:id",
  isAuthenticated,
  taskValidationRules(),
  validate,
  tasksController.updateTask,
);

// @route   DELETE /tasks/:id
router.delete("/:id", isAuthenticated, tasksController.deleteTask);

module.exports = router;
