import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Popup {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  start_date: Date;

  @Column()
  end_date: Date;

  @Column()
  is_center: number;

  @Column()
  left: number;

  @Column()
  right: number;

  @Column()
  width: number;

  @Column()
  height: number;

  @Column()
  device: string;

  @Column()
  title: string;

  @Column()
  content: string;

  @Column()
  activated: boolean;

  @Column()
  page: number;

  @Column()
  ip: string;

  @Column()
  user_id: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @Column('datetime', { name: 'deletedAt', nullable: true })
  deleted_at: Date | null;
}
