import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Category } from './entities/category.entity';
import { Blog } from './entities/blog.entity';
import { CategoriesModule } from './controllers/categories/categories.module';
import { BlogModule } from './controllers/blog/blog.module';
import { ResourceModule } from './controllers/resources/resources.module';
import { Resource } from './entities/resource.entity';

@Module({
  imports: [
    CategoriesModule,
    BlogModule,
    ResourceModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'marianelaheredia',
      password: 'MaguiHere-1705',
      database: 'mi_rincon_consciente',
      entities: [Blog, Category, Resource],
      synchronize: false, // ¡Cuidado con esto en producción! Solo usar en desarrollo.
    }),
  ],

})
export class AppModule {}
