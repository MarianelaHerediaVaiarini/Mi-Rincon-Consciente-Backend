import {
  Controller,
  Post,
  Body,
  Get,
  Delete,
  Param,
  NotFoundException,
  Put,
} from '@nestjs/common';
import { CategoriesService } from '../../services/category.service';
import { CreateCategoryDto, UpdateCategoryDto } from 'src/dto/category.dto';
import { Category } from 'src/entities/category.entity';

@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Post()
  async create(
    @Body() createCategoryDto: CreateCategoryDto,
  ): Promise<Category> {
    return this.categoriesService.create(createCategoryDto);
  }

  @Get()
  async findAll(): Promise<Category[]> {
    return this.categoriesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Category> {
    const categoryId = parseInt(id, 10);
    const category = await this.categoriesService.findOne(categoryId);
    if (!category) {
      throw new NotFoundException(
        `Categoría con ID ${categoryId} no encontrada.`,
      );
    }
    return category;
  }

   @Put(':id')
    update(@Param('id') id: number, @Body() updateCategoryDto: UpdateCategoryDto) {
      return this.categoriesService.update(id, updateCategoryDto);
    }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    const categoryId = parseInt(id, 10);
    return this.categoriesService.remove(categoryId);
  }
}
