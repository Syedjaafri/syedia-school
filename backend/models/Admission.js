const mongoose = require('mongoose');

const AdmissionSchema = new mongoose.Schema({
  parentName: {
    type: String,
    required: true
  },
  childName: {
    type: String,
    required: true
  },
  dob: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    required: true
  },
  level: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  address: {
    type: String
  },
  message: {
    type: String
  },
  status: {
    type: String,
    default: 'Pending'
  }
}, { timestamps: true });

module.exports = mongoose.model('Admission', AdmissionSchema);