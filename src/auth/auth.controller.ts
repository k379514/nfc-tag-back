import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './auth.guard';
import { ManagerRequestDto } from 'src/manager/dto/manager.request.dto';
import { ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';


@ApiTags('Auth')  
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  
  @Post('login')
  @ApiOperation({ summary: 'Login' })
  @ApiBody({ type: ManagerRequestDto })
  async login(@Body() managerRequestDto : ManagerRequestDto) {
    const manager = await this.authService.validateManager(managerRequestDto.email, managerRequestDto.password);
    if(!manager) {
      return { message: 'Invalid email or password' };
    }
    return this.authService.login(manager);
  }

  @Post('signup')
  @ApiOperation({ summary: 'Sign Up' }) 
  @ApiBody({ type: ManagerRequestDto })
  async signUp(@Body() managerRequestDto: ManagerRequestDto) {
    return this.authService.signup(managerRequestDto);
  }
}
