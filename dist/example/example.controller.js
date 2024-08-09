"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExampleController = void 0;
const common_1 = require("@nestjs/common");
const example_service_1 = require("./example.service");
const swagger_1 = require("@nestjs/swagger");
const create_example_response_1 = require("./dto/create-example.response");
const create_example_request_dto_1 = require("./dto/create-example.request.dto");
let ExampleController = class ExampleController {
    constructor(exampleService) {
        this.exampleService = exampleService;
    }
    getAllExample() {
        return this.exampleService.getAllExample();
    }
    createExample(createExampleRequestDto) {
        return this.exampleService.createExample(createExampleRequestDto.description);
    }
};
exports.ExampleController = ExampleController;
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get All Examples' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Get all Examples Success.',
        type: create_example_response_1.CreateExampleResponseDto
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ExampleController.prototype, "getAllExample", null);
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create Example' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'The Example has been successfully created.',
        type: create_example_response_1.CreateExampleResponseDto
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_example_request_dto_1.CreateExampleRequestDto]),
    __metadata("design:returntype", Promise)
], ExampleController.prototype, "createExample", null);
exports.ExampleController = ExampleController = __decorate([
    (0, common_1.Controller)('example'),
    __metadata("design:paramtypes", [example_service_1.ExampleService])
], ExampleController);
//# sourceMappingURL=example.controller.js.map