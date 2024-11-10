const express = require('express');
const router = express.Router();
const gymController = require('../controllers/gymController');

router.get('/', gymController.getAllGyms);
router.get('/:id', gymController.getGymById);
router.put('/:id', gymController.updateGym);
router.delete('/:id', gymController.deleteGym);
router.post('/', gymController.createGym);

module.exports = router;