import {IsOptional} from 'class-validator';
export class UpdateProductDTO {
  @IsOptional()
  title: string;

  @IsOptional()
  price: string;

  @IsOptional()
  status: string;
}