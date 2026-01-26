const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
  projectName: { type: String, required: true },
  description: { type: String, required: true },
  startDate: { type: Date, default: Date.now },
  endDate: { type: Date },
  status: { 
    type: String, 
    enum: ['Active', 'Completed', 'On Hold'], 
    default: 'Active' 
  },
  teamLead: { type: String, required: true }
}, { timestamps: true });

module.exports = mongoose.model('Project', ProjectSchema);