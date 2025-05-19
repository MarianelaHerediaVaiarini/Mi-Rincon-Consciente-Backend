// src/search/search.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SearchController } from './search.controller';
import { Therapy } from 'src/entities/therapy.entity';
import { Blog } from 'src/entities/blog.entity';
import { Resource } from 'src/entities/resource.entity';
import { SearchService } from 'src/services/search.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Therapy, Blog, Resource])
  ],
  controllers: [SearchController],
  providers: [SearchService],
})
export class SearchModule {}
