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
  UseGuards,
  UsePipes,
} from '@nestjs/common';

import { CarDTO } from './dto/car-dto';
import { CreateCarsService } from './services/create-car.service';
import { FindCarsService } from './services/find-car.service';
import { DeleteCarsService } from './services/delete-car.service';
import { UpdateCarsService } from './services/update-car.service';
import { TrimPipe } from 'src/common/pipes/trim-pipes';
import { JwtAuthGuard } from 'src/common/auth/jwt-auth.guard';
@Controller('cars')
export class CarsController {
  constructor(
    private readonly createCarsService: CreateCarsService,
    private readonly deleteCarsService: DeleteCarsService,
    private readonly findCarsService: FindCarsService,
    private readonly updateCarsService: UpdateCarsService,
  ) { }

  @Get()
  @UseGuards(JwtAuthGuard)
  findAll() {
    return this.findCarsService.findAll();
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  findOne(@Param('id') id: number) {
    return this.findCarsService.findOne(id);
  }

  @Post()
  @UsePipes(TrimPipe)
  @UseGuards(JwtAuthGuard)
  create(@Body() car: CarDTO) {
    this.createCarsService.create(car);
    return car;
  }

  @Put(':id')
  @UsePipes(TrimPipe)
  @UseGuards(JwtAuthGuard)
  @HttpCode(HttpStatus.NO_CONTENT)
  updade(@Param('id') id: number, @Body() car: CarDTO) {
    return this.updateCarsService.update(id, car);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id') id: number) {
    return this.deleteCarsService.remove(id);
  }
}
