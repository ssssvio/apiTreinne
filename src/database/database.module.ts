import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSourceOptions } from 'typeorm';

export const dataSorceOptions: DataSourceOptions = {
  type: 'mssql',
  host: process.env.TYPEORM_HOST,
  port: +process.env.TYPEORM_PORT,
  username: process.env.TYPEORM_USERNAME,
  password: process.env.TYPEORM_PASSWORD,
  database: process.env.TYPEORM_DATABASE,
  options: { trustServerCertificate: true },
  synchronize: true,
  logging: true,
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
};

@Module({
  imports: [TypeOrmModule.forRootAsync({
    useFactory: async () => {
      return {
        ...dataSorceOptions,
      }
    }
  })],
})
export class DatabaseModule { }
