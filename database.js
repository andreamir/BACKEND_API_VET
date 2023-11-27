import mongoose from 'mongoose';

const mongoUrl = 'mongodb+srv://andreamir:adminadmin@cluster0.loexado.mongodb.net/';
const mongoDbName = 'VeterinaryDB';
const configDb = { dbName: mongoDbName };

try {
  await mongoose.connect(mongoUrl, configDb);
  console.log('DB CONNECTED');
} catch (e) {
  console.error('DB ERROR');
}
// console.log('database.js');
