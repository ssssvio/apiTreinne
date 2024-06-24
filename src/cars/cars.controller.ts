import {
  // Body,
  Controller,
  // Delete,
  Get,
  // HttpCode,
  // HttpStatus,
  // Param,
  // Post,
  // Put,
  // Res,
} from '@nestjs/common';
import { CarsService } from './cars.service';
import { Car } from './shared/cars';

@Controller('cars')
export class CarsController {
  constructor(private readonly carsService: CarsService) {}

  @Get()
  async findAll(): Promise<Car[]> {
    return await this.carsService.findAll();
  }

  // @Get(':id/:car')
  // findOne(@Param('id') id: string, @Param('car') car: string) {
  //   return `Carro é o ${car} ano ${id}`;
  // }

  // @Post()
  // create(@Body() body: any) {
  //   return body;
  // }

  // @Put(':id')
  // updade(@Param('id') id: string, @Res() response: any, @Body() body: any) {
  //   return response
  //     .status(200)
  //     .json({ message: `Carro com id ${id} atualizado`, body });
  // }

  // @HttpCode(HttpStatus.NO_CONTENT)
  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return `Carro com id ${id} deletado`;
  // }
}
