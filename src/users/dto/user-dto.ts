import { IsString } from 'class-validator';

export class UserDTO {
  @IsString()
  readonly name: string;

  @IsString()
  readonly email: string;

  @IsString()
  readonly password: string;
};
