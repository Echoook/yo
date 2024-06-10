import { Request, Response } from 'express';
import { AppDataSource } from '../dataSource';
import { Room } from '../entities/Room';

const roomRepository = AppDataSource.getRepository(Room);

export const getRooms = async (req: Request, res: Response) => {
    const rooms = await roomRepository.find();
    res.json(rooms);
};

export const getRoom = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const room = await roomRepository.findOne({ where: { id: id } });
    if (room) {
        res.json(room);
    } else {
        res.status(404).send('Room not found');
    }
};

export const createRoom = async (req: Request, res: Response) => {
    const newRoom = roomRepository.create(req.body);
    const result = await roomRepository.save(newRoom);
    res.json(result);
};

export const updateRoom = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const room = await roomRepository.findOne({ where: { id: id } });
    if (room) {
        roomRepository.merge(room, req.body);
        const result = await roomRepository.save(room);
        res.json(result);
    } else {
        res.status(404).send('Room not found');
    }
};

export const deleteRoom = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const result = await roomRepository.delete(id);
    if (result.affected) {
        res.json({ message: 'Room deleted' });
    } else {
        res.status(404).send('Room not found');
    }
};
