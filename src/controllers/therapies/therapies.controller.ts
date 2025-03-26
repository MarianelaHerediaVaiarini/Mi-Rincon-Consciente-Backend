import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreateTherapyDto, UpdateTherapyDto } from 'src/dto/therapy.dto';
import { Therapy } from 'src/entities/therapy.entity';
import { TherapyService } from 'src/services/therapy.service';

@Controller('therapies')
export class TherapiesController {
  constructor(private readonly therapyService: TherapyService) {}

  @Get()
  async getAll(): Promise<Therapy[]> {
    return this.therapyService.getAll();
  }

  @Get(':id')
  async getById(@Param('id') id: number): Promise<Therapy> {
    return this.therapyService.getById(id);
  }

  @Post()
  async create(@Body() body: CreateTherapyDto): Promise<Therapy> {
    return this.therapyService.create(body);
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() body: UpdateTherapyDto,
  ): Promise<Therapy> {
    return this.therapyService.update(id, body);
  }

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<void> {
    return this.therapyService.delete(id);
  }
}
