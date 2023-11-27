import * as clientsService from './clients.service.js';

async function getAll(req, res) {
  const clients = await clientsService.getAll();
  // console.log(clients);
  res.json(clients);
}

async function getByDocumentNumber(req, res) {
  const { number } = req.params; // const number = req.params.number;
  const requiredDocNumLength = 8;
  if (number.length !== requiredDocNumLength) {
    // console.log('number', number);
    console.log('number', number);
    console.log('numberlength', number.length);
    console.log('requirednumber', requiredDocNumLength);
    res.status(400);
    res.json({ msg: 'Error: The length of the document is different to 9' });
    return;
  }
  const client = await clientsService.getByDocumentNumber({ documentNumber: number });
  res.json(client);
}

async function getByFilter(req, res) {
  const { query } = req;
  const filteredClients = await clientsService.getByFilter({ query });
  res.json({ filteredClients });
}

async function post(req, res) {
  const { body } = req;
  if (!Object.keys(body).length) {
    res.status(400);
    res.json({ msg: 'Error: body cannot be empty' });
    return;
  }
  const createdClient = await clientsService.post({ newClient: body });
  res.json({ createdClient });
}
async function clear(req, res) {
  const { id } = req.params;
  console.log('id controller', id);
  const deletedClient = await clientsService.clear({ _id: id });
  console.log('deletedClient controller', deletedClient);
  res.json({ msg: 'Deleted client:', deletedClient });
}

async function put(req, res) {
  const { id } = req.params;
  const { body } = req;
  const replacedClient = await clientsService.put({ _id: id, newClient: body });
  res.json({ msg: 'Replaced client:', replacedClient });
}

async function patch(req, res) {
  const { id } = req.params;
  const { body } = req;
  const updatedClient = await clientsService.patch({ _id: id, changedFields: body });
  res.json({ msg: 'Updated client:', updatedClient });
}

export {
  getAll,
  getByDocumentNumber,
  getByFilter,
  post,
  clear,
  put,
  patch,
};
