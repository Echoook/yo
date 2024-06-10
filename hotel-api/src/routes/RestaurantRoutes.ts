import { Router } from 'express';
import { getRestaurants, getRestaurant, createRestaurant, updateRestaurant, deleteRestaurant } from '../controllers/RestaurantController';

const router = Router();

router.get('/', getRestaurants);
router.get('/:id', getRestaurant);
router.post('/', createRestaurant);
router.put('/:id', updateRestaurant);
router.delete('/:id', deleteRestaurant);

export default router;
