import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Profile_Image {
  // id
  @PrimaryGeneratedColumn({ type: 'int', name: '_id' })
  _id: number;

  // image 총 url
  @Column('text', { nullable: true })
  url: string;

  @Column('text', { nullable: true })
  common_path: string;

  @Column('text', { nullable: true })
  detail_path: string;

  @Column('text', { nullable: true })
  original_file_name: string;

  @Column('text', { nullable: true })
  change_file_name: string;

  @Column()
  extension: string;

  @Column()
  size: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @Column('datetime', { name: 'deletedAt', nullable: true })
  deleted_at: Date | null;
}
