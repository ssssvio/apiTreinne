import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Cars } from '../entities/cars.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class FindCarsService {
  constructor(
    @InjectRepository(Cars)
    private readonly carsRepository: Repository<Cars>,
  ) { }

  async findAll() {
    const allCars = await this.carsRepository.find();
    if (!allCars.length) {
      throw new NotFoundException('No cars found!');
    }
    return allCars;
  };

  async findOne(id: number) {
    if (!id) {
      throw new NotFoundException('Please provide a valid ID!');
    }
    const car = await this.carsRepository.findOne({ where: { id } });
    if (!car) {
      throw new NotFoundException(`Car /${id} not found!`);
    }
    return car;
  };
};