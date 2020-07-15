// const { mongoose, Schema } = require('mongoose');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/*
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
*/

const requiredNumber = {
  type: Number,
  required: true,
};

const logSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: String,
    comments: String,
    image: String,
    rating: {
      type: Number,
      min: 0,
      max: 10,
      default: 5,
    },
    latitude: {
      ...requiredNumber,
      min: -90,
      max: 90,
    },
    longitude: {
      ...requiredNumber,
      min: -180,
      max: 180,
    },
    visitDate: {
      require: true,
      type: Date,
    },
  },
  { timestamps: true },
);

const Log = mongoose.model('log', logSchema);
module.exports = Log;
