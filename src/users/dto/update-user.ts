import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDTO } from './create-user';

export class UpdateUserDTO extends PartialType(CreateUserDTO) { };
