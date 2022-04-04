import { Controller, Get, ConsoleLogger } from '@nestjs/common';
import { CatsService } from './cats.service';

@Controller('cats')
export class CatsController {
  constructor(
    private catsService: CatsService,
    private consoleLogger: ConsoleLogger,
  ) {}
  @Get()
  hello() {
    this.consoleLogger.log('visit api /cats');
    return this.catsService.hello();
  }
}
