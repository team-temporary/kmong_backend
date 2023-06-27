import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  account: string;

  @Column()
  nickname: string;

  @Column()
  name: string;

  @Column()
  platform_type: string;

  @Column()
  role: string;

  @Column()
  gender: string;

  @Column()
  birthday: string;

  @Column()
  email: string;

  @Column()
  email_confirmed: boolean;

  @Column()
  phone_number: string;

  @Column()
  phone_number_confirmed: boolean;

  @Column({ default: 0 })
  access_failed_count: number;
}
