import { ApiOperation, ApiProperty } from '@nestjs/swagger';
import { Manager } from 'src/manager/entities/manager.entity';
import { Menu } from 'src/menu/menu.entity';
import { Entity, Column, PrimaryGeneratedColumn, BaseEntity, OneToMany, ManyToOne } from 'typeorm';

@Entity()
export class Store extends BaseEntity {
    @ApiProperty({
        example: 1,
        description: 'storeId',
    })
    @PrimaryGeneratedColumn()
    storeId: number;

    @ApiProperty({
        example: 'name',
        description: 'store name',
    })
    @Column()
    name: string;

    @ApiProperty({
        example: 'address',
        description: 'store address',
    })
    @Column()
    city: string;

    @ApiProperty({
        example: [
            {
                id: 1,
                name: 'Pepperoni Pizza',
                description: 'A pizza topped with pepperoni',
                price: 15.99,
            },
        ],
        description: 'The list of foods available in the store',
    })
    @OneToMany(() => Menu, menu => menu.store, { cascade: true })
    menu: Menu[];

    @ApiProperty({
        example: 1,
        description: 'The ID of the manager who manages the store',
    })
    @ManyToOne(() => Manager, manager => manager.stores)
    manager: Manager;

    @Column()
    store_picture: string;

}