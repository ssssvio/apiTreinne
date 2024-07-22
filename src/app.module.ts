import { Module } from '@nestjs/common';
import { CarsModule } from './cars/cars.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmConfig } from './config/typeorm.factory';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      useClass: TypeOrmConfig
    }),
    CarsModule,
    UsersModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
