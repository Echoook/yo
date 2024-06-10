import { Request, Response } from 'express';
import { AppDataSource } from '../dataSource';
import { Guest } from '../entities/Guest';

const guestRepository = AppDataSource.getRepository(Guest);

export const getGuests = async (req: Request, res: Response) => {
    const guests = await guestRepository.find();
    res.json(guests);
};

export const getGuest = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const guest = await guestRepository.findOne({ where: { id: id } });
    if (guest) {
        res.json(guest);
    } else {
        res.status(404).send('Guest not found');
    }
};

export const createGuest = async (req: Request, res: Response) => {
    const newGuest = guestRepository.create(req.body);
    const result = await guestRepository.save(newGuest);
    res.json(result);
};

export const updateGuest = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const guest = await guestRepository.findOne({ where: { id: id } });
    if (guest) {
        guestRepository.merge(guest, req.body);
        const result = await guestRepository.save(guest);
        res.json(result);
    } else {
        res.status(404).send('Guest not found');
    }
};

export const deleteGuest = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const result = await guestRepository.delete(id);
    if (result.affected) {
        res.json({ message: 'Guest deleted' });
    } else {
        res.status(404).send('Guest not found');
    }
};
