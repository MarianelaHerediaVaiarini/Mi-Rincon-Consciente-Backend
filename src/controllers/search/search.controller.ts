// src/search/search.controller.ts
import { Controller, Get, Param, Query } from '@nestjs/common';
import { SearchService } from 'src/services/search.service';

@Controller('search')
export class SearchController {
  constructor(private readonly searchService: SearchService) {}

  @Get(':category')
  async search(@Param('category') category: string, @Query('q') query: string) {
    return this.searchService.search(category, query);
  }
}
