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

import { CarsService } from './cars.service';
@Controller('cars')
export class CarsController {
  constructor(private readonly carsService: CarsService) {}

  @Get()
  findAll() {
    return this.carsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.carsService.find(+id);
  }

  @Post()
  create(@Body() body) {
    this.carsService.create(body);
    return body;
  }

  @Put(':id')
  updade(@Param('id') id: number, @Body() body) {
    this.carsService.update(+id, body);
    return;
  }

  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.carsService.delete(+id);
  }
}
