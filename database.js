import mongoose from 'mongoose';
import * as dotenv from 'dotenv';

dotenv.config({}); // Para cargar dotenv. Coge las configs del .env y las aplica en el project

const MONGO_URL = 'mongodb+srv://andreamir:adminadmin@cluster0.loexado.mongodb.net/';
const MONGO_DB_NAME = 'VeterinaryDB';
const configDb = { dbName: MONGO_DB_NAME };

try {
  await mongoose.connect(MONGO_URL, configDb);
  console.log('DB CONNECTED');
} catch (e) {
  console.error('DB ERROR');
}
// console.log('database.js');
