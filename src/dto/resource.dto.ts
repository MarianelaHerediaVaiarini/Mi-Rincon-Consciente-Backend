import { IsString, IsOptional, IsInt, IsArray, IsUrl } from 'class-validator';

export class CreateResourceDto {
  @IsString()
  title: string;

  @IsInt()
  type: number; 

  @IsString()
  @IsOptional()
  description?: string;

  @IsString()
  @IsOptional()
  summary?: string;

  @IsString()
  @IsOptional()
  phrase?: string;

  @IsUrl()
  @IsOptional()
  url?: string;

  @IsString()
  @IsOptional()
  cover_image?: string;

  @IsArray()
  @IsOptional()
  images?: string[];
}

export class UpdateResourceDto {
  @IsString()
  @IsOptional()
  title?: string;

  @IsInt()
  @IsOptional()
  type?: number;

  @IsString()
  @IsOptional()
  description?: string;

  @IsString()
  @IsOptional()
  summary?: string;

  @IsString()
  @IsOptional()
  phrase?: string;

  @IsUrl()
  @IsOptional()
  url?: string;

  @IsString()
  @IsOptional()
  cover_image?: string;

  @IsArray()
  @IsOptional()
  images?: string[];
}
