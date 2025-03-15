import {
  IsString,
  IsOptional,
  IsNotEmpty,
  IsArray,
  IsNumber,
} from 'class-validator';

export class CreateBlogDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsOptional()
  subtitle?: string;

  @IsString()
  @IsOptional()
  summary?: string;

  @IsString()
  @IsNotEmpty()
  content: string;

  @IsString()
  @IsOptional()
  cover_image_url?: string;

  @IsNumber()
  @IsNotEmpty()
  category_id: number;

  @IsArray()
  @IsOptional()
  tags?: string[];
}
export class UpdateBlogDto {
  @IsString()
  @IsOptional()
  title?: string;

  @IsString()
  @IsOptional()
  subtitle?: string;

  @IsString()
  @IsOptional()
  summary?: string;

  @IsString()
  @IsOptional()
  content?: string;

  @IsString()
  @IsOptional()
  cover_image_url?: string;

  @IsNumber()
  @IsOptional()
  category_id: number;

  @IsArray()
  @IsOptional()
  tags?: string[];
}
