import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Blog } from 'src/entities/blog.entity';
import { CreateBlogDto} from 'src/dto/create-blog.dto';
import { UpdateBlogDto } from 'src/dto/update-blog.dto';
import { Category } from 'src/entities/category.entity';

@Injectable()
export class BlogService {
  constructor(
    @InjectRepository(Blog)
    private readonly blogRepository: Repository<Blog>,  

    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category> 
  ) {}

  async create(createBlogDto: CreateBlogDto): Promise<Blog> {
    const category = await this.categoryRepository.findOne({ where: { id: createBlogDto.category_id } });
  
    if (!category) {
      throw new Error('Category not found');
    }
  
    const blog = this.blogRepository.create({
      ...createBlogDto,
      category, 
    });
  
    return this.blogRepository.save(blog);
  }
  
  

  async findAll(): Promise<Blog[]> {
    return this.blogRepository.find({ relations: ['category'] });
  }

  async findOne(id: number): Promise<Blog> {
    const blog = await this.blogRepository.findOne({ where: { id }, relations: ['category'] });
    if (!blog) {
      throw new NotFoundException(`Blog con ID ${id} no encontrado.`);
    }
    return blog;
  }

  async findByCategory(categoryId: number): Promise<Blog[]> {
    return this.blogRepository.find({ where: { category: { id: categoryId } }, relations: ['category'] });
  }

  async update(id: number, updateBlogDto: UpdateBlogDto): Promise<Blog> {
    const blog = await this.findOne(id);
    if (!blog) {
      throw new NotFoundException(`Blog con ID ${id} no encontrado.`);
    }
    Object.assign(blog, updateBlogDto);
    return this.blogRepository.save(blog);
  }

  async remove(id: number): Promise<void> {
    const result = await this.blogRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Blog con ID ${id} no encontrado.`);
    }
  }
}