import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Cars } from '../entities/cars.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { FindCarsService } from './find-car.service';

@Injectable()
export class UpdateCarsService {
  constructor(
    @InjectRepository(Cars)
    private readonly carsRepository: Repository<Cars>,
    private readonly findCarsService: FindCarsService,
  ) { }

  async update(id: number, UpdateCarDTO: any) {
    const car = await this.findCarsService.findOne(id);
    if (!car) {
      throw new NotFoundException(`Car #${id} not found`);
    }
    const carToUpdate = await this.carsRepository.preload({
      ...UpdateCarDTO,
      id,
    });
    if (!carToUpdate) {
      throw new NotFoundException(`Car #${id} not found`);
    }
    return this.carsRepository.save(carToUpdate);
  };

};
