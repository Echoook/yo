import { Router } from 'express';
import { getGuests, getGuest, createGuest, updateGuest, deleteGuest } from '../controllers/GuestController';

const router = Router();

router.get('/', getGuests);
router.get('/:id', getGuest);
router.post('/', createGuest);
router.put('/:id', updateGuest);
router.delete('/:id', deleteGuest);

export default router;
