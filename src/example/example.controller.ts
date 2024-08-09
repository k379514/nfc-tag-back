import { Body, Controller, Get, Post } from '@nestjs/common';
import { ExampleService } from './example.service';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CreateExampleResponseDto } from './dto/create-example.response';
import { Example } from './entities/example.entity';
import { CreateExampleRequestDto } from './dto/create-example.request.dto';

@Controller('example')
export class ExampleController {
    constructor(private exampleService: ExampleService) {}

    @Get()
    @ApiOperation({ summary: 'Get All Examples' })
    @ApiResponse({
        status: 200,
        description: 'Get all Examples Success.',
        type: CreateExampleResponseDto
    })
    getAllExample(): Promise <Example[]> {
        return this.exampleService.getAllExample();
    }

    @Post()
    @ApiOperation({ summary: 'Create Example' })
    @ApiResponse({
        status: 200,
        description: 'The Example has been successfully created.',
        type: CreateExampleResponseDto
    })
    createExample(
        @Body() createExampleRequestDto: CreateExampleRequestDto): Promise <CreateExampleResponseDto> {
        return this.exampleService.createExample(createExampleRequestDto.description);
    }
}
