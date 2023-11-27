import * as clientsRepository from './clients.repository.js';

async function getAll() {
  const clients = await clientsRepository.getAll();
  return clients;
}

async function getByDocumentNumber({ documentNumber }) {
  const client = await clientsRepository.getByDocumentNumber({ documentNumber });
  return client;
}

async function getByFilter({ query }) {
  const filteredClients = await clientsRepository.getByFilter({ query });
  return filteredClients;
}

async function post({ newClient }) {
  const createdClient = await clientsRepository.post({ newClient });
  return createdClient;
}

async function clear({ _id }) {
  console.log('id service', _id);
  const deletedClient = await clientsRepository.clear({ _id });
  console.log('deletedClient', deletedClient);
  return deletedClient;
}

async function put({ _id, newClient }) {
  const replacedClient = await clientsRepository.put({ _id, newClient });
  return replacedClient;
}

async function patch({ _id, changedFields }) {
  const updatedClient = await clientsRepository.patch({ _id, changedFields });
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
