import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateTherapyDto } from 'src/dto/therapy.dto';
import { Therapy } from 'src/entities/therapy.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TherapyService {
  constructor(
    @InjectRepository(Therapy)
    private readonly therapyRepository: Repository<Therapy>,
  ) {}

  async getAll(): Promise<Therapy[]> {
    return this.therapyRepository.find();
  }

  async getById(id: number): Promise<Therapy> {
    const therapy = await this.therapyRepository.findOneBy({ id });
    if (!therapy) {
      throw new Error(`Therapy with ID ${id} not found`);
    }
    return therapy;
  }

  async create(createTherapyDto: CreateTherapyDto): Promise<Therapy> {
    const therapy = this.therapyRepository.create(createTherapyDto);
    return this.therapyRepository.save(therapy);
  }

  async update(
    id: number,
    createTherapyDto: CreateTherapyDto,
  ): Promise<Therapy> {
    const therapy = await this.getById(id);
    Object.assign(therapy, createTherapyDto);
    return this.therapyRepository.save(therapy);
  }

  async delete(id: number): Promise<void> {
    const result = await this.therapyRepository.delete(id);
    if (result.affected === 0) {
      throw new Error(`Therapy with ID ${id} not found`);
    }
  }
}
