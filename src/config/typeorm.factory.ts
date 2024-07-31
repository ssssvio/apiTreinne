import 'dotenv/config';
import { TypeOrmOptionsFactory, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { Cars } from 'src/cars/entities/cars.entity';
import { Users } from 'src/users/entities/users.entity';

@Injectable()
export class TypeOrmConfig implements TypeOrmOptionsFactory {
  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      type: 'mssql',
      host: process.env.TYPEORM_HOST,
      port: +process.env.TYPEORM_PORT,
      username: process.env.TYPEORM_USERNAME,
      password: process.env.TYPEORM_PASSWORD,
      database: process.env.TYPEORM_DATABASE,
      synchronize: true,
      logging: true,
      entities: [Cars, Users],
      migrations: [__dirname + '/migrations/*{.ts,.js}'],
      subscribers: [],
      extra: {
        trustServerCertificate: true,
      },
    };
  }
}