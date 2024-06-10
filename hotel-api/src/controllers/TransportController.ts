import { Request, Response } from 'express';
import { AppDataSource } from '../dataSource';
import { Transport } from '../entities/Transport';

const transportRepository = AppDataSource.getRepository(Transport);

export const getTransports = async (req: Request, res: Response) => {
    const transports = await transportRepository.find();
    res.json(transports);
};

export const getTransport = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const transport = await transportRepository.findOne({ where: { id: id } });
    if (transport) {
        res.json(transport);
    } else {
        res.status(404).send('Transport not found');
    }
};

export const createTransport = async (req: Request, res: Response) => {
    const newTransport = transportRepository.create(req.body);
    const result = await transportRepository.save(newTransport);
    res.json(result);
};

export const updateTransport = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const transport = await transportRepository.findOne({ where: { id: id } });
    if (transport) {
        transportRepository.merge(transport, req.body);
        const result = await transportRepository.save(transport);
        res.json(result);
    } else {
        res.status(404).send('Transport not found');
    }
};

export const deleteTransport = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const result = await transportRepository.delete(id);
    if (result.affected) {
        res.json({ message: 'Transport deleted' });
    } else {
        res.status(404).send('Transport not found');
    }
};
