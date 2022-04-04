import { Module, OnModuleInit } from '@nestjs/common';
import { CatsController } from './cats.controller';

@Module({
  controllers: [CatsController],
})
export class CatsModule implements OnModuleInit {
  onModuleInit(): any {
    console.log('服务启动');
  }
}
