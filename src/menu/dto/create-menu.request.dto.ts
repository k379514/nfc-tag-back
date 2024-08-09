import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from "class-validator";

export class MenuRequestDto {
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
}