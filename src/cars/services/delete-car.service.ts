import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Cars } from '../entities/cars.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { FindCarsService } from './find-car.service';

@Injectable()
export class DeleteCarsService {
  constructor(
    @InjectRepository(Cars)
    private readonly carsRepository: Repository<Cars>,
    private readonly findCarsService: FindCarsService,
  ) { }

  async remove(id: number) {
    const carToRemove = await this.findCarsService.findOne(id);
    if (!carToRemove) {
      throw new NotFoundException(`Car #${id} not found`);
    }
    this.carsRepository.remove(carToRemove);
    return;
  };

};
