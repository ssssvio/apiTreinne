import { Module } from '@nestjs/common';
import { CarsController } from './cars.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cars } from './entities/cars.entity';
import { FindCarsService } from './services/find-car.service';
import { CreateCarsService } from './services/create-car.service';
import { UpdateCarsService } from './services/update-car.service';
import { DeleteCarsService } from './services/delete-car.service';

@Module({
  imports: [TypeOrmModule.forFeature([Cars])],
  controllers: [CarsController],
  providers: [
    CreateCarsService,
    DeleteCarsService,
    UpdateCarsService,
    FindCarsService
  ],
})
export class CarsModule { }
