import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsArray, IsInt, IsNotEmpty, ValidateNested } from "class-validator";
import { MenuItemDto } from './menuItem.dto';
  
export class CreateOrderResponseDto {
    @ApiProperty({ example: 1 })
    @IsNotEmpty()
    storeId: number;

    @ApiProperty({
      example: 5
    })
    @IsInt()
    @IsNotEmpty()
    table_number: number;
  
    @ApiProperty({
      example: [
        {
          id: 1,
          name: 'Pizza',
          quantity: 2,
          price: 12,
        },
        {
          id: 2,
          name: 'Soda',
          quantity: 1,
          price: 4,
        },
      ]
    })
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => MenuItemDto)
    menu: MenuItemDto[];

    @ApiProperty({ example: false })
    @IsNotEmpty()
    is_paid: boolean;

    constructor(storId: number, table_number: number, menu: MenuItemDto[], is_paid: boolean) {
        this.storeId = storId;
        this.table_number = table_number;
        this.menu = menu;
        this.is_paid = is_paid;
    }
}
  