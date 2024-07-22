import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from '../entities/users.entity';

@Injectable()
export class CreateUsersService {
  constructor(
    @InjectRepository(Users)
    private readonly usersRepository: Repository<Users>,
  ) { }

  async create(CreateUserDTO: any) {
    const newUser = this.usersRepository.create(CreateUserDTO);
    return this.usersRepository.save(newUser);
  }
}
