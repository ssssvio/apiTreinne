import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Cars } from '../entities/cars.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CreateCarsService {
  constructor(
    @InjectRepository(Cars)
    private readonly carsRepository: Repository<Cars>,
  ) { };

  async create(CreateCarDTO: any) {
    const newCar = this.carsRepository.create(CreateCarDTO);
    return this.carsRepository.save(newCar);
  };

};
