import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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
}
