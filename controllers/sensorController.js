const Sensor = require('./../models/sensorModel');
const factory = require('./handlerFactory');

exports.sensorUpdateTime = (req, res, next) => {
  const { temp, hum } = req.body;
  const obj = { temp: temp, hum: hum, lastUpdate: Date.now() };

  req.body = obj;

  next();
};

exports.getSensors = factory.getAll(Sensor);
exports.createSensor = factory.createOne(Sensor);
exports.insertSensor = factory.updateOne(Sensor);
