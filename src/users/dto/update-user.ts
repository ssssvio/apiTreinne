import { PartialType } from '@nestjs/mapped-types';
import { IsNumber } from 'class-validator';
import { CreateUserDTO } from './create-user';

export class UpdateUserDTO extends PartialType(CreateUserDTO) {
  @IsNumber()
  readonly id: number;
};
