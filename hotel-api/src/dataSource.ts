import { DataSource } from 'typeorm';
import { Employee } from './entities/Employee';
import { Guest } from './entities/Guest';
import { Reservation } from './entities/Reservation';
import { Room } from './entities/Room';
import { Transport } from './entities/Transport';
import { Restaurant } from './entities/Restaurant';

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'yo',
  password: 'dummypassword',
  database: 'yo',
  synchronize: true,
  logging: false,
  entities: [Employee, Guest, Reservation, Room, Transport, Restaurant],
  migrations: [],
  subscribers: [],
});