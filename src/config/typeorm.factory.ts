import 'dotenv/config';
import { TypeOrmOptionsFactory, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Cars } from 'src/cars/entities/cars.entity';

@Injectable()
export class TypeOrmConfig implements TypeOrmOptionsFactory {
  constructor(private configService: ConfigService) { }
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
      entities: [Cars],
      migrations: [__dirname + '/migrations/*{.ts,.js}'],
      subscribers: [],
      extra: {
        trustServerCertificate: true,
      },
    };
  }
}