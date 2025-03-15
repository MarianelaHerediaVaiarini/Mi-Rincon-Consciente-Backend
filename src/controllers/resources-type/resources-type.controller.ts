import { Controller, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';
import { ResourceTypeService } from 'src/services/resource-type.service';

@Controller('resource-types')
export class ResourceTypeController {
  constructor(private readonly resourceTypeService: ResourceTypeService) {}

  @Get()
  async getAll() {
    return this.resourceTypeService.getAll();
  }

  @Get(':id')
  async getById(@Param('id') id: number) {
    return this.resourceTypeService.getById(id);
  }

  @Post()
  async create(@Body() body: { name: string }) {
    return this.resourceTypeService.create(body.name);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() body: { name: string }) {
    return this.resourceTypeService.update(id, body.name);
  }

  @Delete(':id')
  async delete(@Param('id') id: number) {
    return this.resourceTypeService.delete(id);
  }
}
