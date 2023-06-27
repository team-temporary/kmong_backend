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
  commonPath: string;

  @Column('text', { nullable: true })
  detailPath: string;

  @Column('text', { nullable: true })
  originalFileName: string;

  @Column('text', { nullable: true })
  changeFileName: string;

  @Column()
  extension: string;

  @Column()
  size: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @Column('datetime', { name: 'deletedAt', nullable: true })
  deletedAt: Date | null;
}
