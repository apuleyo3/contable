const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');
// const { check } = require('express-validator');

// Validate user
router.get(
    '/', 
    usersController.validateUser
);

module.exports = router;