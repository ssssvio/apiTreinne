import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { CreateUsersService } from './services/create-user.service';
import { DeleteUsersService } from './services/delete-users.service';
import { FindUsersService } from './services/find-users.service';
import { UpdateUsersService } from './services/update-user.service';

import { UserDTO } from './dto/user-dto';

@Controller('users')
export class UsersController {
  constructor(
    private readonly createUserService: CreateUsersService,
    private readonly deleteUserService: DeleteUsersService,
    private readonly findUserService: FindUsersService,
    private readonly updateUserService: UpdateUsersService,
  ) { }

  @Get()
  async findAll() {
    return this.findUserService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return this.findUserService.findOne(id);
  }

  @Post()
  async create(@Body() createUserDTO: UserDTO) {
    return this.createUserService.create(createUserDTO);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() updateUserDTO: UserDTO) {
    return this.updateUserService.update(id, updateUserDTO);
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    return this.deleteUserService.remove(id);
  }
}
