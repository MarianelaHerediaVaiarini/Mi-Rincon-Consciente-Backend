// src/search/search.service.ts
import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Blog } from 'src/entities/blog.entity';
import { Resource } from 'src/entities/resource.entity';
import { Therapy } from 'src/entities/therapy.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SearchService {
  constructor(
    @InjectRepository(Therapy)
    readonly therapyRepo: Repository<Therapy>,
    @InjectRepository(Blog)
    readonly blogRepo: Repository<Blog>,
    @InjectRepository(Resource)
    readonly resourceRepo: Repository<Resource>,
  ) {}

  async search(category: string, query: string) {
    const q = `%${query.toLowerCase()}%`;

    switch (category) {
      case 'therapies':
        return this.therapyRepo
          .createQueryBuilder('t')
          .where('LOWER(t.name) LIKE :q', { q })
          .select(['t.id', 't.name'])
          .getMany();
      case 'blog':
        return this.blogRepo
          .createQueryBuilder('b')
          .where('LOWER(b.title) LIKE :q', { q })
          .select(['b.id', 'b.title'])
          .getMany();
      case 'resources':
        return this.resourceRepo
          .createQueryBuilder('r')
          .where('LOWER(r.title) LIKE :q', { q })
          .select(['r.id', 'r.title'])
          .getMany();
      default:
        throw new BadRequestException('Categoría no válida');
    }
  }
}
