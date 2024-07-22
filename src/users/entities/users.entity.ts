import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('users')
export class Users {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  role: string;  // Exemplo: 'admin', 'employee', 'manager'

  @Column('simple-array')
  permissions: string[];  // Exemplo: ['view_cars', 'rent_car', 'manage_users']

}