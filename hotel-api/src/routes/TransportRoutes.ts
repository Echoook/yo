import { Router } from 'express';
import { getTransports, getTransport, createTransport, updateTransport, deleteTransport } from '../controllers/TransportController';

const router = Router();

router.get('/', getTransports);
router.get('/:id', getTransport);
router.post('/', createTransport);
router.put('/:id', updateTransport);
router.delete('/:id', deleteTransport);

export default router;
