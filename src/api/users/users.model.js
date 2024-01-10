import { Schema, model } from 'mongoose';

const usersSchema = new Schema({
  name: {
    type: String,
  },
  surname: {
    type: String,
  },
  licenceNumber: {
    type: String,
  },
  role: {
    type: String,
    default: 'staff',
  },
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  confirmed: {
    type: Boolean,
  },
});

const userModel = model('User', usersSchema);
// model('Clientes', clientsSchema, 'clients'), buscaría
// dentro de clients en el db por el tercer atributo, sino
// buscaria en clientess, porque mongoose hace la primera
// minusculas y añade una s al final
export default userModel;
