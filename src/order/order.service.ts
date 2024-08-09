import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Order } from './order.entity';
import { Repository } from 'typeorm';
import { CreateOrderRequestDto } from './dto/create-order.request.dto';
import { CreateOrderResponseDto } from './dto/create-order.response.dto';
import { UpdateOrderRequestDto } from './dto/update-order.request.dto';
import { UpdateOrderResponseDto } from './dto/update-order.response.dto';

@Injectable()
export class OrderService {
    constructor(
        @InjectRepository(Order)
        private orderRepository: Repository <Order>,
    ) {}

    async createOrder(createOrderRequestDto: CreateOrderRequestDto): Promise <CreateOrderResponseDto> {
        const { storeId, table_number, menu, is_paid } = createOrderRequestDto

        let quantity = 0;
        let price = 0;

        menu.forEach(menu => {
            quantity += menu.quantity;
            price += menu.quantity * menu.price;
        })

        const order = this.orderRepository.create({
            storeId,
            table_number,
            menu,
            quantity,
            price,
            is_paid
        });

        await this.orderRepository.save(order);
        
        const response = new CreateOrderResponseDto(storeId, table_number, menu, is_paid);

        return response;
    }

    async getAllOrder(storeId: number): Promise <Order[]> {
        return this.orderRepository.find({where: {storeId}});
    }

    async getOrderByTableNumber(storeId: number, table_number: number): Promise <Order> {
        const order = await this.orderRepository.findOne({ where: {storeId, table_number} });
        if (!order) {
          throw new NotFoundException(`Order with ID ${table_number} not found`);
        }
        return order;
    }

    async getOrderNotPaid(storeId: number, table_number: number): Promise <Order> {
        const order = await this.orderRepository.findOne({ where: {storeId, table_number,} });
        if (!order) {
          throw new NotFoundException(`Order with ID ${table_number} not found`);
        }
        return order;
    }

    async updateOrder(updateOrderRequestDto: UpdateOrderRequestDto): Promise <UpdateOrderResponseDto> {
        const { storeId, table_number } = updateOrderRequestDto;
        const order = await this.getOrderByTableNumber(storeId, table_number);

        if (!order) {
            throw new NotFoundException(`Order with ID ${table_number} not found`);
        }

        let quantity = order.quantity;
        let price = order.price;

        const updatedMenus = [...order.menu, ...updateOrderRequestDto.menu];

        updateOrderRequestDto.menu.forEach(menu => {
            quantity += menu.quantity;
            price += menu.quantity * menu.price;
        })
    
        order.quantity = quantity;
        order.price = price;
        order.menu = updatedMenus;

        await this.orderRepository.save(order);

        const response = new UpdateOrderResponseDto(storeId, table_number, updatedMenus);

        return response;
    }
    
    async deleteOrder(storeId:number, table_number: number): Promise <void> {
        const order = await this.getOrderByTableNumber(storeId, table_number);
        if (!order) {
            throw new NotFoundException(`Orders for table number ${table_number} not found`);
        }
        await this.orderRepository.delete({table_number});
    }

    
}
