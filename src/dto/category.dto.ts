import { IsString, IsNotEmpty } from 'class-validator';

export class CreateCategoryDto {
  @IsString()
  @IsNotEmpty()
  name: string; 

  @IsString()
  description: string; 
}

export class UpdateCategoryDto {
  @IsString()
  @IsNotEmpty()
  name: string; 

  @IsString()
  description: string; 
}
