const express = require('express');
const router = express.Router();
const TaskStatusController = require('../controllers/TaskStatusController');

// All task status related routes
router.route('/task-status')
      .post(TaskStatusController.createTaskStatus);

module.exports = router;