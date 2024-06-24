import { Repository } from 'typeorm';
import { Car } from '../entities/car.entity';

export class CarRepository extends Repository<Car> {
  async findAvailableCars(): Promise<Car[]> {
    return this.find({ where: { rented: false } });
  }
}
