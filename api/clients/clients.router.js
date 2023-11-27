import Router from 'express';
// import db from './clients.js';
import * as clientsController from './clients.controller.js';

const router = Router();

router.get('/all', clientsController.getAll);
router.get('/document/:number', clientsController.getByDocumentNumber);
router.get('/byFilter', clientsController.getByFilter);
router.post('/', clientsController.post);
router.delete('/:id', clientsController.clear);
router.put('/:id', clientsController.put);

export default router;
