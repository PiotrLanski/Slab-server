const express = require('express');
const router = express.Router();
const gymController = require('../controllers/gymController');

router.get('/Gym', gymController.getAllGyms);
router.get('/Gym/:id', gymController.getGymById);
router.put('/Gym/:id', gymController.updateGym);
router.delete('/Gym/:id', gymController.deleteGym);
router.post('/Gym', gymController.createGym);

module.exports = router;