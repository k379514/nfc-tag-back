import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsInt, IsNotEmpty, IsString, ValidateNested } from "class-validator";
  
export class CreateStoreResponseDto {
    @ApiProperty({
        example: 'Best Pizza',
        description: 'The name of the store',
    })
    @IsString()
    name: string;
    
    @ApiProperty({
        example: '123 Main St',
        description: 'The address of the store',
    })
    @IsString()
    address: string;
    
    @ApiProperty({
        example: 1,
        description: 'The ID of the manager who manages the store',
    })
    @IsInt()
    managerId: number;

    constructor(name:string, address: string, managerId: number) {
        this.name = name;
        this.address = address;
        this.managerId = managerId;
    }
}
  