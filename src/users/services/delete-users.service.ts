import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from '../entities/users.entity';
import { Repository } from 'typeorm';
import { FindUsersService } from './find-users.service';

@Injectable()
export class DeleteUsersService {
  constructor(
    @InjectRepository(Users)
    private readonly usersRepository: Repository<Users>,
    private readonly findUserService: FindUsersService,
  ) { }

  async remove(id: number) {
    const userToRemove = await this.findUserService.findOne(id);
    if (!userToRemove) {
      throw new NotFoundException(`User #${id} not found!`);
    }
    this.usersRepository.remove(userToRemove);
    return;
  };
};