const express = require('express');

module.exports = function(server){

  // API Routes
  const router = express.Router();
  server.use('/api', router)

  // ToDo routes
  const todoService = require('../api/todo/todoservice');
  todoService.register(router, '/todos');
}