import { Injectable } from '@nestjs/common';
import { Car } from './shared/cars';
import { CarRepository } from 'src/database/repositories/car.repository';

@Injectable()
export class CarsService {
  constructor(private carRepository: CarRepository) {}

  async findAll(): Promise<Car[]> {
    return this.carRepository.find();
  }

  async create(car: Car): Promise<Car> {
    return this.carRepository.save(car);
  }
}
