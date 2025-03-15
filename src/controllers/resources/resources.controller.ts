import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { ResourceService } from 'src/services/resource.service';
import { CreateResourceDto, UpdateResourceDto } from 'src/dto/resource.dto';

@Controller('resources')
export class ResourceController {
  constructor(private readonly resourceService: ResourceService) {}

  @Get()
  getAll() {
    return this.resourceService.getAll();
  }

  @Get(':id')
  getById(@Param('id') id: number) {
    return this.resourceService.getById(id);
  }

  @Get('type/:type')
  getByType(@Param('type') type: number) {
    return this.resourceService.getByType(type);
  }

  @Post()
  create(@Body() createResourceDto: CreateResourceDto) {
    return this.resourceService.create(createResourceDto);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() updateResourceDto: UpdateResourceDto) {
    return this.resourceService.update(id, updateResourceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.resourceService.remove(id);
  }
}
