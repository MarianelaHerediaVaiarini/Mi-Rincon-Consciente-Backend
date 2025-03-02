import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Category } from './entities/category.entity';
import { Blog } from './entities/blog.entity';
import { CategoriesModule } from './controllers/categories/categories.module';

@Module({
  imports: [
    CategoriesModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'marianelaheredia',
      password: 'MaguiHere-1705',
      database: 'mi_rincon_consciente',
      entities: [Blog, Category],
      synchronize: false, // ¡Cuidado con esto en producción! Solo usar en desarrollo.
    }),
  ],
})
export class AppModule {}
