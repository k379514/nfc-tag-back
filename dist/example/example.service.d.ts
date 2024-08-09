import { Example } from './entities/example.entity';
import { Repository } from 'typeorm';
import { CreateExampleResponseDto } from './dto/create-example.response';
export declare class ExampleService {
    private exampleRepository;
    constructor(exampleRepository: Repository<Example>);
    getAllExample(): Promise<Example[]>;
    createExample(description: string): Promise<CreateExampleResponseDto>;
}
