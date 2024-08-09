import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bycrypt from 'bcryptjs'; 
import { ManagerRequestDto } from 'src/manager/dto/manager.request.dto';
import { ManagerService } from 'src/manager/manager.service';

@Injectable()
export class AuthService {
  constructor(
    private managerService: ManagerService,
    private jwtService: JwtService, 
  ) {}

  async validateManager(email: string, password: string): Promise<any> {
    const manager = await this.managerService.findOneByEmail(email); 
    if(manager && await bycrypt.compare(password, manager.password)) {
      const { password, ...result } = manager;
      return result;
    } 
    return null;
  }

  async login(manager: any) {
    const payload = { email: manager.email, sub: manager.id };
    console.log(payload);
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async signup(managerRequestDto: ManagerRequestDto) {
    const { email, password } = managerRequestDto;  
    const hashedPassword = await bycrypt.hash(password, 12);
    managerRequestDto.password = hashedPassword;
    const newManager = await this.managerService.create(managerRequestDto); 
    const { password: _, ...result } = newManager;  
    return result;
  }
}
