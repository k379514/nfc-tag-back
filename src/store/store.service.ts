import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Store } from './store.entity';
import { Menu } from 'src/menu/menu.entity';

@Injectable()
export class StoreService {
    constructor(
        @InjectRepository(Store)
        private storeRepository: Repository <Store>,
    ) {}

    async getAllMenu(storeId: number): Promise <Menu[]> {
        const store = await this.storeRepository.findOne({where: {storeId}});
        return store.menu
    }

    async updateOrder(updateOrderRequestDto: UpdateOrderRequestDto): Promise <UpdateOrderResponseDto> {
        const {storeId, tableNumber} = updateOrderRequestDto;
        const order = await this.getOrderByTableNumber(storeId, tableNumber);

        if (!order) {
            throw new NotFoundException(`Order with ID ${tableNumber} not found`);
        }

        let totalQuantity = order.totalQuantity;
        let totalPrice = order.totalPrice;

        const updatedMenus = [...order.menus, ...updateOrderRequestDto.menus];

        updateOrderRequestDto.menus.forEach(menu => {
            totalQuantity += menu.quantity;
            totalPrice += menu.quantity * menu.price;
        })
    
        order.totalQuantity = totalQuantity;
        order.totalPrice = totalPrice;
        order.menus = updatedMenus;

        await this.orderRepository.save(order);

        const response = new UpdateOrderResponseDto(storeId, tableNumber, updatedMenus);

        return response;
    }
    
    async deleteOrder(storeId:number, tableNumber: number): Promise <void> {
        const order = await this.getOrderByTableNumber(storeId, tableNumber);
        if (!order) {
            throw new NotFoundException(`Orders for table number ${tableNumber} not found`);
        }
        await this.orderRepository.delete({tableNumber});
    }

    
}
