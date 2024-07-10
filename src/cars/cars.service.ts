import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Cars } from './entities/cars.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateCarDTO } from './dto/create-car';
import { UpdateCarDTO } from './dto/update-car';

@Injectable()
export class CarsService {
  constructor(
    @InjectRepository(Cars)
    private readonly carsRepository: Repository<Cars>,
  ) { }

  async findAll() {
    return this.carsRepository.find();
  }

  async findOne(id: number) {
    const car = await this.carsRepository.findOne({ where: { id } });
    if (!car) {
      throw new NotFoundException(`Car #${id} not found`);
    }
    return car;
  }

  async create(CreateCarDTO: any) {
    const newCar = this.carsRepository.create(CreateCarDTO);
    return this.carsRepository.save(newCar);
  }

  async update(id: number, UpdateCarDTO: any) {
    const carToUpdate = await this.carsRepository.preload({
      ...UpdateCarDTO,
      id,
    });
    if (!carToUpdate) {
      throw new NotFoundException(`Car #${id} not found`);
    }
    return this.carsRepository.save(carToUpdate);
  }

  async remove(id: number) {
    const carToRemove = await this.carsRepository.findOne({ where: { id } });
    if (!carToRemove) {
      throw new NotFoundException(`Car #${id} not found`);
    }
    return this.carsRepository.remove(carToRemove);
  }
}
