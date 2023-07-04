import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Address {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  password: string;

  @Column()
  password_expired: boolean;

  @Column()
  passwored_last_changed: Date;

  @Column()
  password_lifetime: Date;

  @Column()
  password_reuse_history: string[];

  @Column()
  password_reuse_time: Date;

  @Column()
  password_require_current: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @Column('datetime', { name: 'deletedAt', nullable: true })
  deleted_at: Date | null;
}
