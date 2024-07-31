import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CarDTO {
  @ApiProperty({ example: 'Corolla' })
  @IsNotEmpty()
  @IsString()
  readonly name: string;

  @ApiProperty({ example: 'Toyota' })
  @IsNotEmpty()
  @IsString()
  readonly brand: string;

  @ApiProperty({ example: 2022 })
  @IsNotEmpty()
  @IsNumber()
  readonly year: number;

  @ApiProperty({ example: 'White' })
  @IsNotEmpty()
  @IsString()
  readonly color: string;

  @ApiProperty({ example: 25000 })
  @IsNotEmpty()
  @IsNumber()
  readonly price: number;

  @ApiProperty({ example: false })
  @IsNotEmpty()
  @IsBoolean()
  readonly rented: boolean;
}
