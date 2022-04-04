import { Controller, Get, LoggerService } from '@nestjs/common';
import { CatsService } from './cats.service';

@Controller('cats')
export class CatsController {
  constructor(
    private catsService: CatsService,
    private loggerService: LoggerService,
  ) {}
  @Get()
  hello() {
    this.loggerService.log('visit api /cats');
    return this.catsService.hello();
  }
}
