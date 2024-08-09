import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from "class-validator";

export class MenuItemDto {
    @ApiProperty({
      example: 1
    })
    @IsNotEmpty()
    id: number;
  
    @ApiProperty({
      example: 'Pizza'
    })
    @IsNotEmpty()
    name: string;
  
    @ApiProperty({
      example: 2
    })
    @IsNotEmpty()
    quantity: number;
  
    @ApiProperty({
      example: 12.50
    })
    @IsNotEmpty()
    price: number;
}