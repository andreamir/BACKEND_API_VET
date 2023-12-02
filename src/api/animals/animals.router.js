import Router from 'express';
import * as animalsController from './animals.controller.js';

const router = Router();

router.get('/all', animalsController.getAll);
router.get('/client/document/:number', animalsController.getByClientDocumentNumber);
router.patch('/client/document/:number', animalsController.updateByClientNumber);
export default router;
