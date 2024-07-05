import { PartialType } from '@nestjs/mapped-types';
import { CreateCarDTO } from './create-car';

export class UpdateCarDTO extends PartialType(CreateCarDTO) {}
