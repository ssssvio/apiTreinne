import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('cars')
export class Cars {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  brand: string;

  @Column()
  year: number;

  @Column()
  color: string;

  @Column()
  price: number;

  @Column({ default: false })
  rented: boolean;
};