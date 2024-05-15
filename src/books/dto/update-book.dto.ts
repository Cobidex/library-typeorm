import { IsEmpty, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateBookDto {
  @IsOptional()
  @IsString()
  readonly name: string;

  @IsEmpty({ message: 'You are not allowed to send book ID' })
  readonly id: string;

  @IsOptional()
  @IsNumber()
  readonly price: number;

  @IsOptional()
  @IsString()
  readonly author: string;
}
