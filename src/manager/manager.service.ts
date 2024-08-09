import { Injectable } from '@nestjs/common';
import { ManagerRequestDto } from './dto/manager.request.dto';
import * as bycrypt from 'bcryptjs';  
import { InjectRepository } from '@nestjs/typeorm';
import { Manager } from './entities/manager.entity';
import { Repository } from 'typeorm/repository/Repository';

@Injectable()
export class ManagerService {
  constructor(
    @InjectRepository(Manager)
    private readonly managerRepository: Repository<Manager>,  
  ) {}  

  async findAll() : Promise<Manager[]> {  
    return this.managerRepository.find(); 
  }

  async findOneByEmail(email: string): Promise<Manager> {
    return this.managerRepository.findOne({
      where: {
        email,
      },
    }); 
  }

  async create(managerRequestDto: ManagerRequestDto) {
    const { email, password } = managerRequestDto;  
    const user = this.managerRepository.create({ email, password }); 
    return this.managerRepository.save(user);  
  }

  async remove(email: string) {
    const manager = await this.findOneByEmail(email);  
    return this.managerRepository.remove(manager);  
  }
}
