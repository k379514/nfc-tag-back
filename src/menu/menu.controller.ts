import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { MenuService } from './menu.service';

@ApiTags("MenuModule")
@Controller('menu')
export class MenuController {
    constructor(private menuService: MenuService) {}

    
}
