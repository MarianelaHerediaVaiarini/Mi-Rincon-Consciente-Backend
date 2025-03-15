import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Resource } from 'src/entities/resource.entity';
import { ResourceService } from 'src/services/resource.service';
import { ResourceController } from './resources.controller';
@Module({
  imports: [TypeOrmModule.forFeature([Resource])],
  controllers: [ResourceController],
  providers: [ResourceService],
})
export class ResourceModule {}
