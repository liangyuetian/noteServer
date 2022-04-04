import { Controller, Get } from '@nestjs/common';

@Controller('cats')
export class CatsController {
  @Get()
  hello() {
    return 'hello cat';
  }
}
