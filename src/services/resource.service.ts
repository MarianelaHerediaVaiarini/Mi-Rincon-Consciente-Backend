import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Resource } from 'src/entities/resource.entity';
import { CreateResourceDto, UpdateResourceDto } from 'src/dto/resource.dto';
import { ResourceType } from 'src/entities/resource-type.entity';

@Injectable()
export class ResourceService {
  constructor(
    @InjectRepository(Resource)
    private readonly resourceRepository: Repository<Resource>,

    @InjectRepository(ResourceType)
    private readonly resourceTypeRepository: Repository<ResourceType>,
  ) {}

  async getAll(): Promise<Resource[]> {
    return this.resourceRepository.find({
      relations: ['type'],
    });
  }

  async getById(id: number): Promise<Resource> {
    const resource = await this.resourceRepository.findOne({
      where: { id },
      relations: ['type'],
    });

    if (!resource) {
      throw new NotFoundException(`Resource with ID ${id} not found`);
    }

    return resource;
  }

  async getByType(typeId: number): Promise<Resource[]> {
    const type = await this.resourceTypeRepository.findOne({
      where: { id: typeId },
    });

    if (!type) {
      throw new NotFoundException('Tipo de recurso no encontrado');
    }

    return this.resourceRepository.find({
      where: { type },
      relations: ['type'],
    });
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
