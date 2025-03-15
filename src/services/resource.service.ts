import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Resource } from 'src/entities/resource.entity';
import { CreateResourceDto, UpdateResourceDto } from 'src/dto/resource.dto';

@Injectable()
export class ResourceService {
  constructor(
    @InjectRepository(Resource)
    private readonly resourceRepository: Repository<Resource>,
  ) {}

  async getAll(): Promise<Resource[]> {
    return this.resourceRepository.find();
  }

  async getById(id: number): Promise<Resource> {
    const resource = await this.resourceRepository.findOne({ where: { id } });
    if (!resource) {
      throw new NotFoundException(`Resource with ID ${id} not found`);
    }
    return resource;
  }

  async getByType(type: number): Promise<Resource[]> {
    return this.resourceRepository.find({ where: { type } });
  }

  async create(createResourceDto: CreateResourceDto): Promise<Resource> {
    const resource = this.resourceRepository.create(createResourceDto);
    return this.resourceRepository.save(resource);
  }

  async update(
    id: number,
    updateResourceDto: UpdateResourceDto,
  ): Promise<Resource> {
    const resource = await this.getById(id);
    Object.assign(resource, updateResourceDto);
    return this.resourceRepository.save(resource);
  }

  async remove(id: number): Promise<void> {
    const result = await this.resourceRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Resource with ID ${id} not found`);
    }
  }
}
