import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Reservation } from './Reservation';
import { Transport } from './Transport';

@Entity()
export class Guest {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  first_name!: string;

  @Column()
  last_name!: string;

  @OneToMany(() => Reservation, (reservation) => reservation.guest)
  reservations!: Reservation[];  

  @OneToMany(() => Transport, (transport) => transport.guest)
  transports!: Transport[];
}
