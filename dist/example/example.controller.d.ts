import { ExampleService } from './example.service';
import { CreateExampleResponseDto } from './dto/create-example.response';
import { Example } from './entities/example.entity';
import { CreateExampleRequestDto } from './dto/create-example.request.dto';
export declare class ExampleController {
    private exampleService;
    constructor(exampleService: ExampleService);
    getAllExample(): Promise<Example[]>;
    createExample(createExampleRequestDto: CreateExampleRequestDto): Promise<CreateExampleResponseDto>;
}
