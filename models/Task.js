const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Title is required'],
    trim: true
  },
  description: {
    type: String,
    required: [true, 'Description is required']
  },
  priority: {
    type: String,
    required: true,
    enum: ['Low', 'Medium', 'High'],
    default: 'Medium'
  },
  status: {
    type: String,
    required: true,
    enum: ['To-do', 'In Progress', 'Completed'],
    default: 'To-do'
  },
  dueDate: {
    type: Date,
    required: [true, 'Due date is required']
  },
  assignedTo: {
    type: String,
    required: [true, 'Assigned person is required']
  },
  projectId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  },
  tags: {
    type: [String],
    default: []
  }
}, { timestamps: true });

// This is the most important line!
module.exports = mongoose.model('Task', TaskSchema);