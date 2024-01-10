import animalsModel from './animals.model.js';

async function getAll({ skip, limit, newQuery }) {
  // console.log('itemsRepo', items);
  const animals = await animalsModel
    .find(newQuery)
    .skip(skip)
    .limit(limit)
    .populate({ path: 'clientId', select: 'name phone -_id' })
    .lean();
  return animals;
  // lean transforma objectoMongoose en objetoJs
}

async function getPagination({ limit, skip }) {
  const animals = await animalsModel
    .find({})
    .skip(skip)
    .limit(limit)
    .populate({ path: 'clientId', select: 'name phone -_id' })
    .lean();
  return animals;
  // lean transforma objectoMongoose en objetoJs
}

async function getByClientId({ clientId }) {
  const animals = await animalsModel
    .find({ clientId })
    .populate({ path: 'clientId', select: 'name -_id' })
    .lean();
  return animals;
}

async function updateByClientId({ clientId, updatedFields }) {
  await animalsModel
    .updateMany({ clientId }, updatedFields, { new: true });
  const idForSearching = updatedFields.clientId || clientId;
  const updatedAnimals = await animalsModel.find({ clientId: idForSearching }).lean();
  return updatedAnimals;
}

export {
  getAll,
  getByClientId,
  updateByClientId,
  getPagination,
};
