import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from '../entities/users.entity';
import { Repository } from 'typeorm';
import { FindUsersService } from './find-users.service';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users)
    private readonly usersRepository: Repository<Users>,
    private readonly findUserService: FindUsersService,
  ) { }

  async update(id: number, UpdateUserDTO: any) {
    const user = await this.findUserService.findOne(id);
    if (!user) {
      throw new NotFoundException(`User #${id} not found`);
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
