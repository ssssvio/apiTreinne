import { Module } from '@nestjs/common';
import { CarsModule } from './cars/cars.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmConfigService } from './config/typeorm.factory';

@Module({
  imports: [CarsModule, TypeOrmModule.forRootAsync({ useClass: TypeOrmConfigService }),],
  controllers: [],
  providers: [],
})
export class AppModule { }
