import { Entity, Column, PrimaryGeneratedColumn, BaseEntity } from 'typeorm';

@Entity()
export class Example extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text')
  description: string;
}