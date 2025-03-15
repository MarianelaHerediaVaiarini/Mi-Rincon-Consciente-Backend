import { IsString, IsOptional, IsInt, IsArray, IsUrl } from 'class-validator';
import { ResourceType } from 'src/entities/resource-type.entity';

export class CreateResourceDto {
  @IsString()
  title: string;

  @IsInt()
  type: ResourceType; 

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

  @IsOptional()
  type: ResourceType;

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
