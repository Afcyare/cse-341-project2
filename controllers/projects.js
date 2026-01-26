const Project = require("../models/project");

// @desc    Get all projects
exports.getProjects = async (req, res, next) => {
  // #swagger.tags = ['Projects']
  try {
    const projects = await Project.find();
    res.status(200).json(projects);
  } catch (error) {
    next(error);
  }
};

// @desc    Get single project
exports.getProjectById = async (req, res, next) => {
  // #swagger.tags = ['Projects']
  try {
    const project = await Project.findById(req.params.id);
    if (!project) return res.status(404).json({ message: "Project not found" });
    res.status(200).json(project);
  } catch (error) {
    next(error);
  }
};

// @desc    Create new project
exports.createProject = async (req, res, next) => {
  // #swagger.tags = ['Projects']
  /* #swagger.parameters['body'] = {
        in: 'body',
        description: 'Add new project',
        schema: {
          projectName: 'any',
          description: 'any',
          startDate: '2026-01-25',
          endDate: '2026-06-25',
          status: 'Active',
          teamLead: 'any'
        }
  } */
  try {
    const newProject = await Project.create(req.body);
    res.status(201).json(newProject);
  } catch (error) {
    next(error);
  }
};

// @desc    Update project
exports.updateProject = async (req, res, next) => {
  // #swagger.tags = ['Projects']
  /* #swagger.parameters['body'] = {
        in: 'body',
        schema: { projectName: 'any', status: 'Completed' }
  } */
  try {
    const project = await Project.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!project) return res.status(404).json({ message: "Project not found" });
    res.status(200).json(project);
  } catch (error) {
    next(error);
  }
};

// @desc    Delete project
exports.deleteProject = async (req, res, next) => {
  // #swagger.tags = ['Projects']
  try {
    const project = await Project.findByIdAndDelete(req.params.id);
    if (!project) return res.status(404).json({ message: "Project not found" });
    res.status(200).json({ message: "Project deleted" });
  } catch (error) {
    next(error);
  }
};
