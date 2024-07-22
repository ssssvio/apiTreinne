import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from '../entities/users.entity';
import { Repository } from 'typeorm';
import { FindUsersService } from './find-users.service';
import { UpdateUsersDTO } from 'src/cars/dto/update-car';

@Injectable()
export class UpdateUsersService {
  constructor(
    @InjectRepository(Users)
    private readonly usersRepository: Repository<Users>,
    private readonly findUserService: FindUsersService,
  ) { }

  async update(id: number, UpdateUserDTO: UpdateUsersDTO) {
    const user = await this.findUserService.findOne(id);
    if (!user) {
      throw new NotFoundException(`User #${id} not found`);
    }

    const currentUserData = JSON.stringify(user);
    const newUserData = JSON.stringify({ ...user, ...UpdateUsersDTO });
    if (currentUserData === newUserData) {
      return user;
    }

    const userToUpdate = await this.usersRepository.preload({
      ...UpdateUserDTO,
      id,
    });
    if (!userToUpdate) {
      throw new NotFoundException(`User #${id} not found`);
    }
    return this.usersRepository.save(userToUpdate);
  }

}
