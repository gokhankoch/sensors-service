const express = require('express');
const sensorController = require('./../controllers/sensorController');

const router = express.Router();

router
  .route('/')
  .get(sensorController.getSensors)
  .post(sensorController.createSensor);

router
  .route('/:id')
  .post(sensorController.sensorUpdateTime, sensorController.insertSensor);

module.exports = router;
