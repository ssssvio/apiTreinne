import { Module } from '@nestjs/common';
import { CarsController } from './cars.controller';
import { CarsService } from './cars.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CarRepository } from 'src/database/repositories/car.repository';

@Module({
  imports: [TypeOrmModule.forFeature([CarRepository])],
  controllers: [CarsController],
  providers: [CarsService],
})
export class CarsModule {}
