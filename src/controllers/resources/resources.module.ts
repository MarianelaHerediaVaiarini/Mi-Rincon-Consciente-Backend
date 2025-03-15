import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Resource } from 'src/entities/resource.entity';
import { ResourceService } from 'src/services/resource.service';
import { ResourceController } from './resources.controller';
import { ResourceType } from 'src/entities/resource-type.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Resource, ResourceType])
  ],
  controllers: [ResourceController],
  providers: [ResourceService],
})
export class ResourceModule {}

