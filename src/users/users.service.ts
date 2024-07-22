import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from './entities/users.entity';
import { Repository } from 'typeorm';
import { CreateUserDTO } from './dto/create-user';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users)
    private readonly usersRepository: Repository<Users>,
  ) { }

  async findAll() {
    return this.usersRepository.find();
  }

  async findOne(id: number) {
    const user = await this.usersRepository.findOne({ where: { id } });
    if (!user) {
      throw new NotFoundException(`User #${id} not found`);
    }
    return user;
  }

  async create(CreateUserDTO: any) {
    const newUser = this.usersRepository.create(CreateUserDTO);
    return this.usersRepository.save(newUser);
  }

  async update(id: number, UpdateUserDTO: any) {
    const user = await this.findOne(id);
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

  async remove(id: number) {
    const userToRemove = await this.usersRepository.findOne({ where: { id } });
    if (!userToRemove) {
      throw new NotFoundException(`User #${id} not found`);
    }
    return this.usersRepository.remove(userToRemove);
  }
}
