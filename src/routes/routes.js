const express = require('express');
const router = express.Router();

const moviesController = require('../controllers/controller');

router.get('/', Controller.index);
router.get('/movie:id');

module.exports = router;