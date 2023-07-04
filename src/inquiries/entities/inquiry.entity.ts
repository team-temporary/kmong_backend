import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Inquiry {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  category: string;

  @Column()
  description: string;
}
