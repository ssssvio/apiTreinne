import { Controller, Get, Post, Put, Delete, Param, Body, UsePipes, UseGuards } from '@nestjs/common';
import { CreateUsersService } from './services/create-user.service';
import { DeleteUsersService } from './services/delete-users.service';
import { FindUsersService } from './services/find-users.service';
import { UpdateUsersService } from './services/update-user.service';

import { UserDTO } from './dto/user-dto';
import { TrimPipe } from 'src/common/pipes/trim-pipes';
import { JwtAuthGuard } from 'src/common/auth/jwt-auth.guard';

@Controller('users')
export class UsersController {
  constructor(
    private readonly createUserService: CreateUsersService,
    private readonly deleteUserService: DeleteUsersService,
    private readonly findUserService: FindUsersService,
    private readonly updateUserService: UpdateUsersService,
  ) { }

  @UseGuards(JwtAuthGuard)
  @Get()
  async findAll() {
    return this.findUserService.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async findOne(@Param('id') id: number) {
    return this.findUserService.findOne(id);
  }

  @Post()
  @UsePipes(TrimPipe)
  async create(@Body() createUserDTO: UserDTO) {
    return this.createUserService.create(createUserDTO);
  }

  @UseGuards(JwtAuthGuard)
  @Put(':id')
  @UsePipes(TrimPipe)
  async update(@Param('id') id: number, @Body() updateUserDTO: UserDTO) {
    return this.updateUserService.update(id, updateUserDTO);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async remove(@Param('id') id: number) {
    return this.deleteUserService.remove(id);
  }
}
