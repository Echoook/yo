import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Reservation } from './Reservation';

@Entity()
export class Restaurant {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column()
  location!: string;

  @OneToMany(() => Reservation, (reservation) => reservation.restaurant)
  reservations!: Reservation[];
}
