import { Store } from 'src/store/store.entity';
import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, ManyToOne } from 'typeorm';

@Entity()
export class Menu extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  text: string;

  @Column()
  price: number;

  @Column()
  category: string;

  @Column()
  img: string;

  @ManyToOne(() => Store, store => store.menu)
  store: Store;
}