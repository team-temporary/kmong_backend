import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class User_Notify {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email_receive: boolean;

  @Column()
  email_inquiry_receive: boolean;

  @Column()
  kakao_receive: boolean;

  @Column()
  kakao_inquiry_receive: boolean;
}
