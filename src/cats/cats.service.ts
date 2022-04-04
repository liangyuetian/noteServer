import { Injectable } from '@nestjs/common';

@Injectable()
export class CatsService {
  hello() {
    console.log('Hello Cats');
    return 'Hello Cats';
  }
}
