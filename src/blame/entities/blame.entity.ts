import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Blame {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  blamer: number;

  @Column()
  blamed: number;

  @Column()
  content: string;

  @Column()
  status: string;

  @Column()
  ip: string;

  @Column()
  datetime: Date;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @Column('datetime', { name: 'deletedAt', nullable: true })
  deleted_at: Date | null;
}
