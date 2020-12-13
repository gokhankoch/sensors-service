const mongoose = require('mongoose');
//const slugify = require('slugify');

const sensorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'A Sensor must have a name'],
      unique: true,
      trim: true,
      maxlength: [
        40,
        'A Sensor name must have less or equal then 40 characters'
      ],
      minlength: [5, 'A Sensor name must have more or equal then 10 characters']
      // validate: [validator.isAlpha, ' Tour name must only contain characters']
    },
    deviceID: {
      type: String
    },
    devicetype: {
      type: String
    },
    temp: {
      type: Number
    },
    hum: {
      type: Number
    },
    lastUpdate: Date
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
  }
);

sensorSchema.pre('save', function(next) {
  //if (!this.isModified('temp') || this.isNew) return next();
  this.lastUpdate = Date.now() - 1000; // todo:small hack

  next();
});

const Sensor = mongoose.model('Sensor', sensorSchema);

module.exports = Sensor;
