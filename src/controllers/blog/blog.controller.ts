import {
    Controller,
    Post,
    Body,
    Get,
    Delete,
    Param,
    Put,
    NotFoundException,
  } from '@nestjs/common';
  import { BlogService } from 'src/services/blog.service';
  import { CreateBlogDto } from 'src/dto/create-blog.dto';
  import { UpdateBlogDto } from 'src/dto/update-blog.dto';
  import { Blog } from 'src/entities/blog.entity';
  
  @Controller('blog')
  export class BlogController {
    constructor(private readonly blogService: BlogService) {}
  
    @Post()
    async create(@Body() createBlogDto: CreateBlogDto): Promise<Blog> {
      return this.blogService.create(createBlogDto);
    }
  
    @Get()
    async findAll(): Promise<Blog[]> {
      return this.blogService.findAll();
    }
  
    @Get(':id')
    async findOne(@Param('id') id: string): Promise<Blog> {
      const blogId = parseInt(id, 10);
      const blog = await this.blogService.findOne(blogId);
      if (!blog) {
        throw new NotFoundException(`Blog con ID ${blogId} no encontrado.`);
      }
      return blog;
    }
  
    @Get('category/:categoryId')
    async findByCategory(@Param('categoryId') categoryId: string): Promise<Blog[]> {
      const catId = parseInt(categoryId, 10);
      return this.blogService.findByCategory(catId);
    }
  
    @Put(':id')
    async update(@Param('id') id: string, @Body() updateBlogDto: UpdateBlogDto): Promise<Blog> {
      const blogId = parseInt(id, 10);
      return this.blogService.update(blogId, updateBlogDto);
    }
  
    @Delete(':id')
    async remove(@Param('id') id: string): Promise<void> {
      const blogId = parseInt(id, 10);
      return this.blogService.remove(blogId);
    }
  }