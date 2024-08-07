import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Cars } from '../entities/cars.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { FindCarsService } from './find-car.service';
import { CarDTO } from '../dto/car-dto';

@Injectable()
export class UpdateCarsService {
  constructor(
    @InjectRepository(Cars)
    private readonly carsRepository: Repository<Cars>,
    private readonly findCarsService: FindCarsService,
  ) { }

  async update(id: number, updateCarDTO: CarDTO) {
    const car = await this.findCarsService.findOne(id);
    if (!car) {
      throw new NotFoundException(`Car #${id} not found!`);
    };

    const currentUserData = JSON.stringify(car);
    const newUserData = JSON.stringify({ ...car, ...updateCarDTO });
    if (currentUserData === newUserData) {
      return;
    };

    const carToUpdate = await this.carsRepository.preload({
      ...updateCarDTO,
      id,
    });
    if (!carToUpdate) {
      throw new NotFoundException(`Car #${id} not found`);
    }

    this.carsRepository.save(carToUpdate);
    return;
  };
};