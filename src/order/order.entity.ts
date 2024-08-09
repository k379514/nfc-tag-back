import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, OneToMany } from 'typeorm';

@Entity('OrderList')
export class Order extends BaseEntity {
  @PrimaryGeneratedColumn()
  orderId: number;

  @Column()
  storeId: number;

  @Column()
  table_number: number;

  @Column('json')
  menu: { id: number; name: string; quantity: number; price: number }[];

  @Column()
  price: number;

  @Column()
  quantity: number;

  @Column()
  is_paid: boolean;
}