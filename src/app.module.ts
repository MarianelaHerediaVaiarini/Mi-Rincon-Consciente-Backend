import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Category } from './entities/category.entity';
import { Blog } from './entities/blog.entity';
import { CategoriesModule } from './controllers/categories/categories.module';
import { BlogModule } from './controllers/blog/blog.module';
import { ResourceModule } from './controllers/resources/resources.module';
import { Resource } from './entities/resource.entity';
import { ResourceTypeModule } from './controllers/resources-type/resources-type.module';
import { ResourceType } from './entities/resource-type.entity';
import { TherapiesModule } from './controllers/therapies/therapies.module';
import { Therapy } from './entities/therapy.entity';
import { SearchModule } from './controllers/search/search.module';
import * as dotenv from 'dotenv';
dotenv.config();
@Module({
  imports: [
    CategoriesModule,
    BlogModule,
    ResourceModule,
    ResourceTypeModule,
    TherapiesModule,
    SearchModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      url:
        process.env.DATABASE_URL ||
        'postgresql://marianelaheredia:MaguiHere-1705@localhost:5432/mi_rincon_consciente',
      entities: [Blog, Category, Resource, ResourceType, Therapy],
      synchronize: false,
       ssl: { rejectUnauthorized: false },
    }),
  ],
})
export class AppModule {}
