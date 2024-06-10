import { Request, Response } from 'express';
import { AppDataSource } from '../dataSource';
import { Restaurant } from '../entities/Restaurant';

const restaurantRepository = AppDataSource.getRepository(Restaurant);

export const getRestaurants = async (req: Request, res: Response) => {
    const restaurants = await restaurantRepository.find();
    res.json(restaurants);
};

export const getRestaurant = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const restaurant = await restaurantRepository.findOne({ where: { id: id } });
    if (restaurant) {
        res.json(restaurant);
    } else {
        res.status(404).send('Restaurant not found');
    }
};

export const createRestaurant = async (req: Request, res: Response) => {
    const newRestaurant = restaurantRepository.create(req.body);
    const result = await restaurantRepository.save(newRestaurant);
    res.json(result);
};

export const updateRestaurant = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const restaurant = await restaurantRepository.findOne({ where: { id: id } });
    if (restaurant) {
        restaurantRepository.merge(restaurant, req.body);
        const result = await restaurantRepository.save(restaurant);
        res.json(result);
    } else {
        res.status(404).send('Restaurant not found');
    }
};

export const deleteRestaurant = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const result = await restaurantRepository.delete(id);
    if (result.affected) {
        res.json({ message: 'Restaurant deleted' });
    } else {
        res.status(404).send('Restaurant not found');
    }
};
