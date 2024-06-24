import { Repository } from 'typeorm';
import { Car } from '../entities/car.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CarRepository extends Repository<Car> {
  async findAvailableCars(): Promise<Car[]> {
    return this.find({ where: { rented: false } });
  }

  async findCarById(id: number): Promise<Car> {
    return this.findOne({ where: { id } });
  }
}
