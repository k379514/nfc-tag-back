import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { OrderService } from './order.service';
import { ApiBody, ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Order } from './order.entity';
import { CreateOrderRequestDto } from './dto/create-order.request.dto';
import { CreateOrderResponseDto } from './dto/create-order.response.dto';
import { UpdateOrderResponseDto } from './dto/update-order.response.dto';
import { UpdateOrderRequestDto } from './dto/update-order.request.dto';
import { table } from 'console';

@ApiTags('OrderModule')
@Controller('order')
export class OrderController {
    constructor(private orderService: OrderService) {}

    @Get('/:storeId')
    @ApiOperation({ summary: 'Get All Orders' })
    @ApiResponse({
        status: 200,
        description: 'Get Success',
        type: CreateOrderResponseDto
    })
    getAllOrder(@Param('storeId', ParseIntPipe) storeId: number): Promise <Order[]> {
        return this.orderService.getAllOrder(storeId);
    }

    @Get('/:storeId/:tableNumber')
    @ApiOperation({ summary: 'Get Order By Table Number' })
    @ApiResponse({
        status: 200,
        description: 'Get Success',
        type: CreateOrderResponseDto
    })
    getOrderByTableNumber(
        @Param('stordId', ParseIntPipe) storeId: number,
        @Param('tableNumber', ParseIntPipe) tableNumber: number,
    ): Promise <Order> {
        return this.orderService.getOrderByTableNumber(storeId, tableNumber);
    }

    @Post()
    @ApiOperation({ summary: 'Create Order' })
    @ApiResponse({
        status: 200,
        description: 'The Order has been successfully created.',
        type: CreateOrderResponseDto
    })
    @UsePipes(ValidationPipe)
    createOrder(@Body() createOrderRequestDto: CreateOrderRequestDto): Promise <CreateOrderResponseDto> {
        return this.orderService.createOrder(createOrderRequestDto);
    }

    @Patch()
    @ApiOperation({ summary: 'Update Order' })
    @ApiResponse({
        status: 200,
        description: 'The Order has been successfully updated.',
        type: UpdateOrderResponseDto
    })
    updateOrder(@Body() updateOrderRequestDto: UpdateOrderRequestDto
    ): Promise <UpdateOrderResponseDto> {
        return this.orderService.updateOrder(updateOrderRequestDto);
    }

    @Delete('/:storeId/:tableNumber')
    @ApiOperation({ summary: 'Delete Order' })
    deleteBoard(
        @Param('storeId', ParseIntPipe) storeId: number,
        @Param('tableNumber', ParseIntPipe) tableNumber: number,
    ): Promise <void> {
        return this.orderService.deleteOrder(storeId, tableNumber);
    }

    
}
