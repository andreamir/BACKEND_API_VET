import { Schema, model } from 'mongoose';

const clientsSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  surname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    // eslint-disable-next-line no-useless-escape
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'],
  },
  phone: {
    type: String,
    required: true,
  },
  adress: {
    type: String,
    required: true,
  },
  document: {
    type: {
      type: String,
      required: true,
      enums: ['DNI', 'NIE', 'Passport'],
    },
    number: {
      type: String,
      required: true,
    },
  },
});

const clientModel = model('Client', clientsSchema);
// model('Clientes', clientsSchema, 'clients'), buscaría
// dentro de clients en el db por el tercer atributo, sino
// buscaria en clientess, porque mongoose hace la primera
// minusculas y añade una s al final
export default clientModel;
