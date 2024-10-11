const mongoose = require('mongoose');
require('dotenv').config();

const dbConnect = async () => {
  try {
    await mongoose.connect('mongodb+srv://yamanayush27204:<db_password>@yamanloandatabase.m41by.mongodb.net/?retryWrites=true&w=majority&appName=YamanLoanDatabase', {});
    console.log('DB connected successfully');
  } catch (error) {
    console.error('DB connection error:', error.message);
    process.exit(1);
  }
};

module.exports = dbConnect;