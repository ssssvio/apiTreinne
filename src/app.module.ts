import { Module } from '@nestjs/common';
import { AppModuleCars } from './cars/app.module';

@Module({
  imports: [AppModuleCars],
  controllers: [],
  providers: [],
})
export class AppModule {}
