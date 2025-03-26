import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('therapies')
export class Therapy {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  phrase: string;

  @Column()
  summary: string;

  @Column()
  duration: number;

  @Column()
  price: number;

  @Column()
  modality: number;

  @Column()
  type: number;

  @Column()
  cover_image: string;

  @Column('text', { array: true })
  images: string[];

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;
}
