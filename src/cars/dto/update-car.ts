import { PartialType } from '@nestjs/mapped-types';
import { IsNumber } from 'class-validator';
import { CreateCarDTO } from './create-car';

export class UpdateUsersDTO extends PartialType(CreateCarDTO) {
  @IsNumber()
  readonly id: number;
}
