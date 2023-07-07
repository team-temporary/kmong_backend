import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  account: string;

  @Column()
  nickname: string;

  @Column()
  first_name: string;

  @Column()
  second_name: string;

  @Column()
  platform_type: string;

  @Column()
  role: string;

  @Column()
  gender: string;

  @Column()
  birthday: string;

  @Column()
  is_admin: boolean;

  @Column()
  register_datetime: Date;

  @Column()
  lastsignin_datetime: Date;

  @Column()
  email: string;

  @Column()
  email_confirmed: boolean;

  @Column({ default: 0 })
  email_access_failed: number;

  @Column()
  phone_number: string;

  @Column()
  phone_number_confirmed: boolean;

  @Column({ default: 0 })
  phone_access_failed: number;

  @Column()
  hashed_refresh_token: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @Column('datetime', { name: 'deletedAt', nullable: true })
  deleted_at: Date | null;
}
