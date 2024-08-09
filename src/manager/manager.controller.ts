import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ManagerService } from './manager.service'; 
import { ManagerRequestDto } from './dto/manager.request.dto';

@Controller('manager')
export class ManagerController {
  constructor(
    private readonly managerService: ManagerService,
  ) {}  
  
  @Get()
  findAll() {
    return this.managerService.findAll();
  } 
  
  @Post('remove') 
  remove(@Body() managerRequestDto: { email: string }) {
    return this.managerService.remove(managerRequestDto.email);
  }

  @Get(':email')
  findOneByEmail(@Param('email') email: string) {
    return this.managerService.findOneByEmail(email);
  } 
}
