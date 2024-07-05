import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCarDTO } from './dto/create-car';

@Injectable()
export class CarsService {
  private cars: CreateCarDTO[] = [
    {
      id: 1,
      name: 'Car1',
      brand: 'Brand1',
      year: 2020,
      color: 'Color1',
      price: 100,
      rented: false,
    },
    {
      id: 2,
      name: 'Car2',
      brand: 'Brand2',
      year: 2021,
      color: 'Color2',
      price: 200,
      rented: false,
    },
    {
      id: 3,
      name: 'Car3',
      brand: 'Brand3',
      year: 2022,
      color: 'Color3',
      price: 300,
      rented: false,
    },
  ];

  findAll() {
    return this.cars;
  }

  find(id: number) {
    const index = this.cars.find((car) => car.id === id);
    if (!index) {
      throw new NotFoundException(`Car ${id} not found`);
    }
    return index;
  }

  create(car: CreateCarDTO) {
    this.cars.push(car);
  }

  update(id: number, car: CreateCarDTO) {
    const index = this.cars.findIndex((car) => car.id === id);
    this.cars[index] = car;
  }

  delete(id: number) {
    this.cars = this.cars.filter((car) => car.id !== id);
  }
}
