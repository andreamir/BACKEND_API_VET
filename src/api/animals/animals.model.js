import { Schema, model } from 'mongoose';

const { ObjectId } = Schema.Types;

const animalsSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  species: {
    type: String,
    required: true,
    enum: ['cat', 'dog', 'parrot', 'hamster', 'rabbit', 'fish'],
  },
  breed: {
    type: String,
    required: true,
  },
  sex: {
    type: String,
    required: true,
    enum: ['male', 'female', 'unknown'],
  },
  chipNumber: {
    type: String,
    unique: true,
  },
  birth: {
    type: String,
    required: true,
  },
  clientId: {
    type: ObjectId,
    ref: 'Client',
  },
});

const animalsModel = model('Animal', animalsSchema);
// model('Clientes', clientsSchema, 'clients'), buscaría
// dentro de clients en el db por el tercer atributo, sino
// buscaria en clientess, porque mongoose hace la primera
// minusculas y añade una s al final
export default animalsModel;
