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
    return this.carsRepository.find();
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

}