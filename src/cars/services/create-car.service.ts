import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Cars } from '../entities/cars.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CarDTO } from '../dto/car-dto';

@Injectable()
export class CreateCarsService {
  constructor(
    @InjectRepository(Cars)
    private readonly carsRepository: Repository<Cars>,
  ) { };

  async create(createCarDTO: CarDTO) {
    const newCar = this.carsRepository.create(createCarDTO);
    return this.carsRepository.save(newCar);
  };

};
