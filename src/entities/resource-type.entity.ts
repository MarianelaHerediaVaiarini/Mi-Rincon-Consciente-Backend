import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('resource_types')
export class ResourceType {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}
