const express = require('express');
const router = express.Router();
const projectsController = require('../controllers/projects');
const { isAuthenticated } = require('../middleware/authenticate');


router.get('/', projectsController.getProjects);
router.get('/:id', projectsController.getProjectById);

router.post('/', isAuthenticated, (req, res) => {
    /* #swagger.security = [{
            "github_auth": ["user:email"]
    }] */
    projectsController.createProject(req, res);
});

router.put('/:id', isAuthenticated, (req, res) => {
    /* #swagger.security = [{
            "github_auth": ["user:email"]
    }] */
    projectsController.updateProject(req, res);
});

router.delete('/:id', isAuthenticated, (req, res) => {
    /* #swagger.security = [{
            "github_auth": ["user:email"]
    }] */
    projectsController.deleteProject(req, res);
});

module.exports = router;