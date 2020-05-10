const port = 3003;

const bodyParser = require('body-parser');
const express = require('express');
const Server = express();

Server.use(bodyParser.urlencoded({ extended:true }));
Server.use(bodyParser.json());

Server.listen(port, function() {
  console.log(`Backend is running on port ${port}.`);
})

module.exports = Server;