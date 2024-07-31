import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class LoginDto {
  @ApiProperty({ example: 'savio@example.com' })
  @IsNotEmpty()
  @IsString()
  readonly email: string;

  @ApiProperty({ example: 'password123' })
  @IsNotEmpty()
  @IsString()
  readonly password: string;
}
