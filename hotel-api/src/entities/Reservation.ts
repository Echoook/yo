import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Employee } from './Employee';
import { Guest } from './Guest';
import { Room } from './Room';
import { Restaurant } from './Restaurant';

@Entity()
export class Reservation {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  reservation_date!: Date;

  @Column()
  number_days!: number;

  @ManyToOne(() => Room, (room) => room.reservations)
  room!: Room;

  @ManyToOne(() => Guest, (guest) => guest.reservations)
  guest!: Guest;

  @ManyToOne(() => Employee, (employee) => employee.reservations)
  employee!: Employee;

  @ManyToOne(() => Restaurant, (restaurant) => restaurant.reservations)
  restaurant!: Restaurant;
}
