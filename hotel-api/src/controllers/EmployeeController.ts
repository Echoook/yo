import { Request, Response } from 'express';
import { AppDataSource } from '../dataSource';
import { Employee } from '../entities/Employee';

const employeeRepository = AppDataSource.getRepository(Employee);

export const getEmployees = async (req: Request, res: Response) => {
    const employees = await employeeRepository.find();
    res.json(employees);
};

export const getEmployee = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const employee = await employeeRepository.findOne({ where: { id: id } });
    if (employee) {
        res.json(employee);
    } else {
        res.status(404).send('Employee not found');
    }
};

export const createEmployee = async (req: Request, res: Response) => {
    const newEmployee = employeeRepository.create(req.body);
    const result = await employeeRepository.save(newEmployee);
    res.json(result);
};

export const updateEmployee = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const employee = await employeeRepository.findOne({ where: { id: id } });
    if (employee) {
        employeeRepository.merge(employee, req.body);
        const result = await employeeRepository.save(employee);
        res.json(result);
    } else {
        res.status(404).send('Employee not found');
    }
};

export const deleteEmployee = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const result = await employeeRepository.delete(id);
    if (result.affected) {
        res.json({ message: 'Employee deleted' });
    } else {
        res.status(404).send('Employee not found');
    }
};
