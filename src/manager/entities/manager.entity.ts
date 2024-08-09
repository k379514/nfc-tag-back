import { ApiProperty } from "@nestjs/swagger";
import { Store } from "src/store/store.entity";
import { BaseEntity, Column, Entity, OneToMany, PrimaryColumn } from "typeorm";

@Entity()
export class Manager extends BaseEntity{
  @ApiProperty({
    example: '12345678@hanyang.ac.kr', 
    description: '이메일',
  })
  @PrimaryColumn()
  email: string;  

  @ApiProperty({
    example: '1q2w3e4r!', 
    description: '비밀번호',
  })
  @Column()
  password: string;
  
  @ApiProperty({
    example: [
      {
        id: 1,
        name: 'Best Pizza',
        address: '123 Main St',
        tableQuantity: '10',
      },
    ],
    description: 'The list of stores managed by the manager',
  })
  @OneToMany(() => Store, store => store.manager)
  stores: Store[];

  @Column()
  id: number;

}