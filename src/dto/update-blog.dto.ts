import {
  IsString,
  IsOptional,
  IsArray,
  IsNumber,
} from 'class-validator';

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
