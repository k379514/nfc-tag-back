import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Example } from './entities/example.entity';
import { Repository } from 'typeorm';
import { CreateExampleResponseDto } from './dto/create-example.response';

@Injectable()
export class ExampleService {
    constructor(
        @InjectRepository(Example)
        private exampleRepository: Repository <Example>,
    ) {}

    getAllExample(): Promise <Example[]> {
        return this.exampleRepository.find();
    }

    async createExample(description: string): Promise<CreateExampleResponseDto> {
        const result: Example = await this.exampleRepository.save({
          description,
        });
        return new CreateExampleResponseDto(result.id, result.description);
      }

}
