import { IsEmpty, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateBookDto {
  @IsNotEmpty()
  @IsString()
  readonly name: string;

  @IsEmpty({ message: 'You are not allowed to send book ID' })
  readonly id: string;

  @IsNotEmpty()
  @IsNumber()
  readonly price: number;

  @IsNotEmpty()
  @IsString()
  readonly author: string;
}
