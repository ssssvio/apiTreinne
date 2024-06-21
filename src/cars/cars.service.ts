import { Injectable } from '@nestjs/common';
import { Car } from './shared/cars';

@Injectable()
export class CarsService {
  private cars: Car[] = [
    {
      id: 1,
      name: 'Onix',
      brand: 'Chevrolet',
      year: 2020,
      color: 'Preto',
      price: 100,
      rented: false,
    },
    {
      id: 2,
      name: 'Gol',
      brand: 'Volkswagen',
      year: 2020,
      color: 'Branco',
      price: 100,
      rented: false,
    },
    {
      id: 3,
      name: 'Uno',
      brand: 'Fiat',
      year: 2020,
      color: 'Vermelho',
      price: 100,
      rented: false,
    },
  ];
}
