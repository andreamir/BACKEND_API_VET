import * as animalsRepository from './animals.repository.js';
import * as clientsService from '../clients/clients.service.js';

async function getAll(query) {
  const animals = await animalsRepository.getAll(query);
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
};
