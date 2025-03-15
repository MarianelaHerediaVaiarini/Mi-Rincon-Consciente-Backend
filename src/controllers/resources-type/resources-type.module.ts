import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ResourceType } from 'src/entities/resource-type.entity';
import { ResourceTypeService } from 'src/services/resource-type.service';
import { ResourceTypeController } from './resources-type.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ResourceType])], 
  controllers: [ResourceTypeController],
  providers: [ResourceTypeService], 
})
export class ResourceTypeModule {}

