import clientModel from './clients.model.js';

async function getAll() {
  const clients = await clientModel.find({}).lean();
  return clients;
  // lean transforma objectoMongoose en objetoJs
}

async function getByDocumentNumber({ documentNumber }) {
  const client = clientModel.findOne({ 'document.number': documentNumber }).lean();
  return client;
  // document.number va en string para cuando buscamos dentro de un objeto
}

async function getByFilter({ query }) {
  const clients = await clientModel.find(query).lean();
  return clients;
}

async function post({ newClient }) {
  const createdClient = await clientModel.create(newClient);
  return createdClient;
}

async function clear({ _id }) {
  console.log('id repo', _id);
  const deletedClient = await clientModel.findByIdAndDelete(_id);
  console.log('id deletedClient', deletedClient);
  return deletedClient;
}

async function put({ _id, newClient }) {
  const replacedClient = await clientModel.findOneAndReplace({ _id }, newClient, {
    new: true,
  });
  return replacedClient;
}

async function patch({ _id, changedFields }) {
  const updatedClient = await clientModel.findByIdAndUpdate(_id, changedFields, {
    new: true,
  });
  return updatedClient;
}

export {
  getAll,
  getByDocumentNumber,
  post,
  getByFilter,
  clear,
  put,
  patch,
};
