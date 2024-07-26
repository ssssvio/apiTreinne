import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
} from '@nestjs/common';

import { CarDTO } from './dto/car-dto';
import { CreateCarsService } from './services/create-car.service';
import { FindCarsService } from './services/find-car.service';
import { DeleteCarsService } from './services/delete-car.service';
import { UpdateCarsService } from './services/update-car.service';
@Controller('cars')
export class CarsController {
  constructor(
    private readonly createCarsService: CreateCarsService,
    private readonly deleteCarsService: DeleteCarsService,
    private readonly findCarsService: FindCarsService,
    private readonly updateCarsService: UpdateCarsService,
  ) { }

  @Get()
  findAll() {
    return this.findCarsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.findCarsService.findOne(id);
  }

  @Post()
  create(@Body() car: CarDTO) {
    this.createCarsService.create(car);
    return car;
  }

  @Put(':id')
  updade(@Param('id') id: number, @Body() car: CarDTO) {
    return this.updateCarsService.update(id, car);
  }

  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.deleteCarsService.remove(id);
  }
}
