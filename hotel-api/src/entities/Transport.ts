import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Guest } from './Guest';

@Entity()
export class Transport {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  type!: string;

  @Column('decimal')
  price!: number;

  @ManyToOne(() => Guest, (guest) => guest.transports)
  guest!: Guest;
}
