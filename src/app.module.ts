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
      host: 'localhost',
      port: 5432,
      username: 'marianelaheredia',
      password: 'MaguiHere-1705',
      database: 'mi_rincon_consciente',
      entities: [Blog, Category, Resource, ResourceType, Therapy],
      synchronize: false, // ¡Cuidado con esto en producción! Solo usar en desarrollo.
    }),
  ],
})
export class AppModule {}
