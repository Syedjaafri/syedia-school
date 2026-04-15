require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'DELETE'],
  allowedHeaders: ['Content-Type']
}));
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ MongoDB Connected!'))
  .catch((err) => console.log('❌ Error:', err));

// Models
const Admission = require('./models/Admission');
const Contact = require('./models/Contact');

// TEST ROUTE
app.get('/', (req, res) => {
  res.json({ message: '✅ Syedia School Backend Running!' });
});

// ADMISSION FORM - Save Data
app.post('/api/admission', async (req, res) => {
  try {
    const {
      parentName, childName, dob,
      gender, level, phone,
      email, address, message
    } = req.body;

    const newAdmission = new Admission({
      parentName, childName, dob,
      gender, level, phone,
      email, address, message
    });

    await newAdmission.save();
    res.status(201).json({ 
      success: true,
      message: '✅ Admission Application Saved!' 
    });

  } catch (error) {
    res.status(500).json({ 
      success: false,
      message: '❌ Server Error', error 
    });
  }
});

// CONTACT FORM - Save Data
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, phone, subject, message } = req.body;

    const newContact = new Contact({
      name, email, phone, subject, message
    });

    await newContact.save();
    res.status(201).json({ 
      success: true,
      message: '✅ Contact Message Saved!' 
    });

  } catch (error) {
    res.status(500).json({ 
      success: false,
      message: '❌ Server Error', error 
    });
  }
});

// ADMIN - View ALL Admissions
app.get('/api/admin/admissions', async (req, res) => {
  try {
    const admissions = await Admission.find().sort({ createdAt: -1 });
    res.json({
      total: admissions.length,
      data: admissions
    });
  } catch (error) {
    res.status(500).json({ message: '❌ Server Error', error });
  }
});

// ADMIN - View ALL Contacts
app.get('/api/admin/contacts', async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json({
      total: contacts.length,
      data: contacts
    });
  } catch (error) {
    res.status(500).json({ message: '❌ Server Error', error });
  }
});

// ADMIN - Delete Admission
app.delete('/api/admin/admissions/:id', async (req, res) => {
  try {
    await Admission.findByIdAndDelete(req.params.id);
    res.json({ message: '✅ Deleted Successfully!' });
  } catch (error) {
    res.status(500).json({ message: '❌ Server Error', error });
  }
});

// ADMIN - Delete Contact
app.delete('/api/admin/contacts/:id', async (req, res) => {
  try {
    await Contact.findByIdAndDelete(req.params.id);
    res.json({ message: '✅ Deleted Successfully!' });
  } catch (error) {
    res.status(500).json({ message: '❌ Server Error', error });
  }
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});