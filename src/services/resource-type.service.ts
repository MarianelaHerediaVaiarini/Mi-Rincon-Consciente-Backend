import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ResourceType } from 'src/entities/resource-type.entity';

@Injectable()
export class ResourceTypeService {
  constructor(
    @InjectRepository(ResourceType)
    private readonly resourceTypeRepository: Repository<ResourceType>,
  ) {}

  async getAll(): Promise<ResourceType[]> {
    return this.resourceTypeRepository.find();
  }

  async getById(id: number): Promise<ResourceType> {
    const resourceType = await this.resourceTypeRepository.findOneBy({ id });
    if (!resourceType) {
      throw new Error(`ResourceType with ID ${id} not found`);
    }
    return resourceType;
  }

  async create(name: string): Promise<ResourceType> {
    const resourceType = this.resourceTypeRepository.create({ name });
    return this.resourceTypeRepository.save(resourceType);
  }

  async update(id: number, name: string): Promise<ResourceType> {
    const resourceType = await this.getById(id);
    resourceType.name = name;
    return this.resourceTypeRepository.save(resourceType);
  }

  async delete(id: number): Promise<void> {
    const result = await this.resourceTypeRepository.delete(id);
    if (result.affected === 0) {
      throw new Error(`ResourceType with ID ${id} not found`);
    }
  }
}
