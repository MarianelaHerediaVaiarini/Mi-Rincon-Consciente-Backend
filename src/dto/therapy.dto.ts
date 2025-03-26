import { IsString, IsNumber, IsOptional, IsArray, IsUrl } from 'class-validator';

export class CreateTherapyDto {
  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsString()
  phrase: string;

  @IsString()
  summary: string;

  @IsNumber()
  duration: number;

  @IsNumber()
  price: number;

  @IsNumber()
  modality: number;

  @IsNumber()
  type: number;

  @IsUrl()
  cover_image: string;

  @IsArray()
  @IsString({ each: true })
  images: string[];

  @IsOptional()
  created_at?: Date;
}

export class UpdateTherapyDto {
  @IsString()
  @IsOptional()
  name: string;

  @IsString()
  @IsOptional()
  description: string;

  @IsString()
  @IsOptional()
  phrase: string;

  @IsString()
  @IsOptional()
  summary: string;

  @IsNumber()
  @IsOptional()
  duration: number;

  @IsNumber()
  @IsOptional()
  price: number;

  @IsNumber()
  @IsOptional()
  modality: number;

  @IsNumber()
  @IsOptional()
  type: number;

  @IsUrl()
  @IsOptional()
  cover_image: string;

  @IsArray()
  @IsString({ each: true })
  @IsOptional()
  images: string[];

  @IsOptional()
  created_at?: Date;
}
