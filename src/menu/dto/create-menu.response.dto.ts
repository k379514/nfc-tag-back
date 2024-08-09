import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from "class-validator";

export class MenuResponseDto {
  @ApiProperty({ example: 'name' })
  @IsNotEmpty()
  name: string;

  @ApiProperty({ example: 'price' })
  @IsNotEmpty()
  price: number;

  @ApiProperty({ example: 'description' })
  description: string;

  @ApiProperty({ example: 'category' })
  @IsNotEmpty()
  category: string;

  @ApiProperty({ example: 'pictureUrl'})
  pictureUrl: string;

  constructor(name: string, description: string, price: number, category: string, pictureUrl: string){
    this.name = name;
    this.description = description;
    this.price = price;
    this.category = category;
    this.pictureUrl = pictureUrl;
  }
}