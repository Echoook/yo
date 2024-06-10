import { Router } from 'express';
import { getRooms, getRoom, createRoom, updateRoom, deleteRoom } from '../controllers/RoomController';

const router = Router();

router.get('/', getRooms);
router.get('/:id', getRoom);
router.post('/', createRoom);
router.put('/:id', updateRoom);
router.delete('/:id', deleteRoom);

export default router;
