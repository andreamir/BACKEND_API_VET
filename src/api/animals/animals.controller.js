import * as animalsService from './animals.service.js';

async function getAll(req, res) {
  const { query } = req;
  const animals = await animalsService.getAll(query);
  res.json(animals);
}

async function getByClientDocumentNumber(req, res) {
  const clientDocumentNumber = req.params.number;
  const animals = await animalsService.getByClientDocumentNumber({ clientDocumentNumber });
  res.json(animals);
}

async function updateByClientNumber(req, res) {
  const clientDocumentNumber = req.params.number;
  const updatedFields = req.body;
  const namedParams = { clientDocumentNumber, updatedFields };
  console.log('namedParams', namedParams);
  const animals = await animalsService.updateByClientNumber(namedParams);
  res.json(animals);
}

export {
  getAll,
  getByClientDocumentNumber,
  updateByClientNumber,
};
