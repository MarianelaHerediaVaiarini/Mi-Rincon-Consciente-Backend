import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Blog } from 'src/entities/blog.entity';
import { BlogService } from 'src/services/blog.service';
import { BlogController } from './blog.controller';
import { Category } from 'src/entities/category.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Blog, Category])],
  controllers: [BlogController],
  providers: [BlogService],
})
export class BlogModule {}