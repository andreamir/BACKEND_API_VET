import Router from 'express';
// import db from './clients.js';
import * as clientsController from './clients.controller.js';
import isAdmin from '../../middlewares/isAdmin.js';

const router = Router();

router.get('/all', isAdmin, clientsController.getAll);
router.get('/document/:number', clientsController.getByDocumentNumber);
router.get('/filter', clientsController.getByFilter);
router.post('/', clientsController.post);
router.delete('/:id', clientsController.clear);
router.put('/:id', clientsController.put);
router.patch('/:id', clientsController.patch);

export default router;
