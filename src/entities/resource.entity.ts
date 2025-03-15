import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity('resources')
export class Resource {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column('int')
  type: number; 

  @Column({ nullable: true })
  description: string;

  @Column({ nullable: true })
  summary: string;

  @Column({ nullable: true })
  phrase: string;

  @Column({ nullable: true })
  url: string;

  @Column({ nullable: true })
  cover_image: string;

  @Column('text', { nullable: true, array: true })
  images: string[];

  @CreateDateColumn()
  published_at: Date;
}
