const express = require('express');
const router = express.Router();

const moviesController = require('../controllers/controller');

router.get('/', moviesController.index);
router.get('/movie/:id', moviesController.details);
router.get('/about', moviesController.about);

module.exports = router;