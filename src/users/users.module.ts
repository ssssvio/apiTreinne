import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersController } from './users.controller';
import { Users } from './entities/users.entity';
import { CreateUsersService } from './services/create-user.service';
import { DeleteUsersService } from './services/delete-users.service';
import { UpdateUsersService } from './services/update-user.service';
import { FindUsersService } from './services/find-users.service';

@Module({
  imports: [TypeOrmModule.forFeature([Users])],
  controllers: [UsersController],
  providers: [
    CreateUsersService,
    DeleteUsersService,
    UpdateUsersService,
    FindUsersService
  ],
  exports: [FindUsersService],
})
export class UsersModule { }