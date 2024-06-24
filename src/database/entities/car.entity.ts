import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Car extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  brand: string;

  @Column()
  year: number;

  @Column()
  price: number;

  @Column()
  color: string;

  @Column({ default: false })
  rented: boolean;
}
