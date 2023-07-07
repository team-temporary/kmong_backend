import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Withdrawal_User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  withdrawal_date: Date;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @Column('datetime', { name: 'deletedAt', nullable: true })
  deleted_at: Date | null;
}
