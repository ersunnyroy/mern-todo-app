const express = require('express');
const router = express.Router();
const TaskController = require('../controllers/TaskController');
// Import your middleware function
const verifyJWT = require('../middleware/verifyJWT');

// verify JWT route to all task route
router.use(verifyJWT);

// All task related routes
router.route('/task')
      .post(TaskController.createTask)
      .get(TaskController.getTasks);

module.exports = router;