const Task = require('../models/Task');

// @desc    Get all tasks
// @route   GET /tasks
exports.getTasks = async (req, res, next) => {
  // #swagger.tags = ['Tasks']
  /* #swagger.responses[200] = {
        description: 'List of all tasks successfully retrieved.',
        schema: [{ $ref: '#/definitions/Task' }]
  } */

  try {
    const tasks = await Task.find();
    res.status(200).json(tasks);
  } catch (error) {
    next(error);
  }
};

// @desc    Get single task by ID
// @route   GET /tasks/:id
exports.getTaskById = async (req, res, next) => {
  // #swagger.tags = ['Tasks']
  /* #swagger.parameters['id'] = {
        in: 'path',
        required: true,
        type: 'string',
        description: 'The unique ID of the task'
  } */

  try {
    const task = await Task.findById(req.params.id);
    if (!task) {
      return res.status(404).json({ success: false, message: 'Task not found' });
    }
    res.status(200).json(task);
  } catch (error) {
    next(error);
  }
};

// @desc    Create a new task
// @route   POST /tasks
exports.createTask = async (req, res, next) => {
  // #swagger.tags = ['Tasks']
  /* #swagger.parameters['body'] = {
        in: 'body',
        description: 'Task data to create a new record',
        required: true,
        schema: {
          title: 'Build Task Management API',
          description: 'Complete the backend implementation using Node.js and Mongoose for week 3.',
          priority: 'High',
          status: 'In Progress',
          dueDate: '2026-01-30T10:00:00.000Z',
          assignedTo: 'Afcayre',
          projectId: '65b1234567890abcdef12345',
          tags: ['Backend', 'BYUI', 'Assignment']
        }
  } */

  try {
    const newTask = await Task.create(req.body);
    res.status(201).json(newTask);
  } catch (error) {
    next(error);
  }
};

// @desc    Update a task
// @route   PUT /tasks/:id
exports.updateTask = async (req, res, next) => {
  // #swagger.tags = ['Tasks']
  /* #swagger.parameters['id'] = {
        in: 'path',
        required: true,
        type: 'string'
  } */
  /* #swagger.parameters['body'] = {
        in: 'body',
        description: 'Task data to update',
        required: true,
        schema: {
          title: 'Updated task title',
          description: 'Updated description',
          priority: 'Medium',
          status: 'Completed',
          dueDate: '2026-02-01T10:00:00.000Z',
          assignedTo: 'Afcayre',
          tags: ['Backend', 'Updated']
        }
  } */

  try {
    const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });

    if (!task) {
      return res.status(404).json({ success: false, message: 'Task not found' });
    }

    res.status(200).json(task);
  } catch (error) {
    next(error);
  }
};

// @desc    Delete a task
// @route   DELETE /tasks/:id
exports.deleteTask = async (req, res, next) => {
  // #swagger.tags = ['Tasks']
  /* #swagger.parameters['id'] = {
        in: 'path',
        required: true,
        type: 'string'
  } */

  try {
    const task = await Task.findByIdAndDelete(req.params.id);
    if (!task) {
      return res.status(404).json({ success: false, message: 'Task not found' });
    }
    res.status(200).json({ success: true, message: 'Task deleted successfully' });
  } catch (error) {
    next(error);
  }
};