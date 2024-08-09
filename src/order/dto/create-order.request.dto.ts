import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsArray, IsInt, IsNotEmpty, ValidateNested } from "class-validator";
import { Menu } from 'src/menu/menu.entity';
import { MenuItemDto } from './menuItem.dto';
  
export class CreateOrderRequestDto {
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
          price: 2,
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
}
  