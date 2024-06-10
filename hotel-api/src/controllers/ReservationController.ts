import { Request, Response } from 'express';
import { AppDataSource } from '../dataSource';
import { Reservation } from '../entities/Reservation';

const reservationRepository = AppDataSource.getRepository(Reservation);

export const getReservations = async (req: Request, res: Response) => {
    const reservations = await reservationRepository.find();
    res.json(reservations);
};

export const getReservation = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const reservation = await reservationRepository.findOne({ where: { id: id } });
    if (reservation) {
        res.json(reservation);
    } else {
        res.status(404).send('Reservation not found');
    }
};

export const createReservation = async (req: Request, res: Response) => {
    const newReservation = reservationRepository.create(req.body);
    const result = await reservationRepository.save(newReservation);
    res.json(result);
};

export const updateReservation = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const reservation = await reservationRepository.findOne({ where: { id: id } });
    if (reservation) {
        reservationRepository.merge(reservation, req.body);
        const result = await reservationRepository.save(reservation);
        res.json(result);
    } else {
        res.status(404).send('Reservation not found');
    }
};

export const deleteReservation = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const result = await reservationRepository.delete(id);
    if (result.affected) {
        res.json({ message: 'Reservation deleted' });
    } else {
        res.status(404).send('Reservation not found');
    }
};
