import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString, MaxLength, MinLength } from "class-validator";

export class ManagerResponseDto {
  @ApiProperty({
    example: '12345678@hanyang.ac.kr', 
    description: '이메일',
  })
  @IsEmail()
  @IsNotEmpty()
  email: string;  

  @ApiProperty({
    example: '1q2w3e4r!', 
    description: '비밀번호',
  })
  @IsString()
  @IsNotEmpty()
  @MinLength(8)
  @MaxLength(20)
  password: string; 

  constructor(email: string, password: string) {
    this.email = email;
    this.password = password;
  }
}
