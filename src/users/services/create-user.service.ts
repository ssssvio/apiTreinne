import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from '../entities/users.entity';
import { CreateUserDTO } from '../dto/create-user';
import { FindUsersService } from './find-users.service';

@Injectable()
export class CreateUsersService {
  constructor(
    @InjectRepository(Users)
    private readonly usersRepository: Repository<Users>,
    private readonly findUserService: FindUsersService,
  ) { }

  async create(createUserDTO: CreateUserDTO) {

    const user = await this.findUserService.findOneByEmail(createUserDTO.email);
    if (user) {
      throw new NotFoundException(`User with email ${createUserDTO.email} already exists.`);
    };

    const newUser = this.usersRepository.create(createUserDTO);
    const savedUser = await this.usersRepository.save(newUser);
    const { password, ...result } = savedUser;

    return result;
  }
}