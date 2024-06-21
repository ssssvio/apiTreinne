import { Module } from '@nestjs/common';
import { CarsController } from './cars/cars.controller';
import { CarsService } from './cars/cars.service';

@Module({
  imports: [],
  controllers: [CarsController],
  providers: [CarsService],
})
export class AppModule {}
