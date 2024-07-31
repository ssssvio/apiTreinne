import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from '../entities/users.entity';
import { Repository } from 'typeorm';
import { FindUsersService } from './find-users.service';
import { UserDTO } from '../dto/user-dto';

@Injectable()
export class UpdateUsersService {
  constructor(
    @InjectRepository(Users)
    private readonly usersRepository: Repository<Users>,
    private readonly findUserService: FindUsersService,
  ) { }

  async update(id: number, updateUserDTO: UserDTO) {
    const user = await this.findUserService.findOne(id);
    if (!user) {
      throw new NotFoundException(`User #${id} not found!`);
    }

    const currentUserData = JSON.stringify(user);
    const newUserData = JSON.stringify({ ...user, ...updateUserDTO });
    if (currentUserData === newUserData) {
      return;
    };

    if (updateUserDTO.email) {
      const userWithSameEmail = await this.findUserService.findOneByEmail(updateUserDTO.email);
      if (userWithSameEmail && userWithSameEmail.id !== id) {
        throw new NotFoundException(`User with email ${updateUserDTO.email} already exists!`);
      }
    };

    const userToUpdate = await this.usersRepository.preload({
      ...updateUserDTO, id
    })
    if (!userToUpdate) {
      throw new NotFoundException(`User #${id} not found!`);
    };

    this.usersRepository.save(userToUpdate);
    return;
  }

}
