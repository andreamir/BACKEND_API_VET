import * as animalsRepository from './animals.repository.js';
import * as clientsService from '../clients/clients.service.js';

function getSkipAndLimit({ page, items }) {
  const skip = (page - 1) * items;
  const limit = items;
  return { skip, limit };
}

async function getAll(query) {
  const { page, items, ...newQuery } = query;
  const { skip, limit } = getSkipAndLimit({ page, items });
  const animals = await animalsRepository.getAll({ skip, limit, newQuery });
  return animals;
}

async function getPagination({ page, items }) {
  const { skip, limit } = getSkipAndLimit({ page, items });
  const animals = await animalsRepository.getPagination(limit, skip);
  return animals;
}

async function getByClientDocumentNumber({ clientDocumentNumber }) {
  const client = await clientsService.getByDocumentNumber({ documentNumber: clientDocumentNumber });
  const animals = await animalsRepository.getByClientId({ clientId: client._id });
  return animals;
}

async function updateByClientNumber({ clientDocumentNumber, updatedFields }) {
  console.log('clientDocumentNumber service', clientDocumentNumber);
  const client = await clientsService.getByDocumentNumber({ documentNumber: clientDocumentNumber });
  console.log('animals service', client);
  const namedParams = { clientId: client._id, updatedFields };
  const animals = await animalsRepository.updateByClientId(namedParams);
  return animals;
}

export {
  getAll,
  getByClientDocumentNumber,
  updateByClientNumber,
  getPagination,
};
