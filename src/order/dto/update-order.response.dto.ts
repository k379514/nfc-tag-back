import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsArray, IsNotEmpty, ValidateNested } from "class-validator";
import { Menu } from 'src/menu/menu.entity';
import { MenuItemDto } from './menuItem.dto';

export class UpdateOrderResponseDto {
    @ApiProperty({ example: 1 })
    @IsNotEmpty()
    storeId: number;

    @ApiProperty({
      example: 5
    })
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
            price: 5,
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
  
    constructor(storeId: number, table_number: number, menu: MenuItemDto[]) {
        this.storeId = storeId;
        this.table_number = table_number;
        this.menu = menu;
    }
}