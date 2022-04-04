import { Module, OnModuleInit } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';

@Module({
  controllers: [CatsController],
  providers: [CatsService],
})
export class CatsModule implements OnModuleInit {
  onModuleInit(): any {
    console.log('服务启动');
  }
}
