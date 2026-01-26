const { body, validationResult } = require('express-validator');

/**
 * Validation rules for Task creation and update
 * Covers at least 7 fields as per project requirements
 */
const taskValidationRules = () => {
  return [
    // 1. Title: Required and trimmed
    body('title')
      .trim()
      .notEmpty()
      .withMessage('Title is required'),

    // 2. Description: Required
    body('description')
      .notEmpty()
      .withMessage('Description is required'),

    // 3. Priority: Must be one of the specified levels
    body('priority')
      .isIn(['Low', 'Medium', 'High'])
      .withMessage('Priority must be Low, Medium, or High'),

    // 4. Status: Required field
    body('status')
      .isIn(['To-do', 'In Progress', 'Completed'])
      .withMessage('Status must be To-do, In Progress, or Completed'),

    // 5. Due Date: Must be a valid ISO8601 date
    body('dueDate')
      .isISO8601()
      .toDate()
      .withMessage('Please provide a valid date (YYYY-MM-DD)'),

    // 6. AssignedTo: Required
    body('assignedTo')
      .notEmpty()
      .withMessage('AssignedTo field is required'),

    // 7. ProjectId: Must be a valid MongoDB ObjectId
    body('projectId')
      .isMongoId()
      .withMessage('A valid Project ID is required'),

    // 8. Tags: Optional but must be an array if provided
    body('tags')
      .optional()
      .isArray()
      .withMessage('Tags must be an array of strings')
  ];
};

/**
 * Middleware to check for validation errors
 * If errors exist, it sends a 422 response
 */
const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return next(); // Move to the next middleware/controller
  }

  // Format the errors into a readable array
  const extractedErrors = [];
  errors.array().map(err => extractedErrors.push({ [err.path]: err.msg }));

  return res.status(422).json({
    success: false,
    message: "Validation failed",
    errors: extractedErrors,
  });
};

module.exports = {
  taskValidationRules,
  validate,
};