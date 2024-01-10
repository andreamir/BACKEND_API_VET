import Router from 'express';
import * as animalsController from './animals.controller.js';

const router = Router();

router.get('/all', animalsController.getAll);
router.get('/all/:page/:items', animalsController.getAll);
router.get('/pagination/:page/:items', animalsController.getPagination);
router.get('/client/document/:number', animalsController.getByClientDocumentNumber);
router.patch('/client/document/:number', animalsController.updateByClientNumber);
export default router;
