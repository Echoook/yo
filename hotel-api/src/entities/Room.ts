import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Reservation } from './Reservation';

@Entity()
export class Room {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  room_number!: number;

  @Column()
  room_type!: string;

  @Column()
  room_rate!: number;

  @OneToMany(() => Reservation, (reservation) => reservation.room)
  reservations!: Reservation[];
}
