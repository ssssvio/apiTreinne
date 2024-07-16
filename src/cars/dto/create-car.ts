import { IsBoolean, IsNumber, IsString } from 'class-validator';

export class CreateCarDTO {
  @IsString()
  readonly name: string;

  @IsString()
  readonly brand: string;

  @IsNumber()
  readonly year: number;

  @IsString()
  readonly color: string;

  @IsNumber()
  readonly price: number;

  @IsBoolean()
  readonly rented: boolean;
}
