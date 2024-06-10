import 'reflect-metadata';
import express, { Application } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { AppDataSource } from './dataSource';
import employeeRoutes from './routes/EmployeeRoutes';
import guestRoutes from './routes/GuestRoutes';
import reservationRoutes from './routes/ReservationRoutes';
import roomRoutes from './routes/RoomRoutes';
import transportRoutes from './routes/TransportRoutes';
import restaurantRoutes from './routes/RestaurantRoutes';

interface AppContext {
  app: Application;
  dataSource: any;
}

const dataSource = AppDataSource;

export const appPromise: Promise<AppContext> = dataSource.initialize().then((dataSource) => {
  const app = express();

  app.use(cors({
    origin: 'http://localhost:8080',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
  }));
  
  app.use(bodyParser.json());

  app.use('/employees', employeeRoutes);
  app.use('/guests', guestRoutes);
  app.use('/reservations', reservationRoutes);
  app.use('/rooms', roomRoutes);
  app.use('/transports', transportRoutes);
  app.use('/restaurants', restaurantRoutes);

  app.listen(3000, () => {
    console.log(`Server is running on port 3000`);
  });

  return { app, dataSource };
}).catch(error => {
  console.error('Error during Data Source initialization', error);
  throw error;
});
