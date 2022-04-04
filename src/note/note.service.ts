import { Injectable } from '@nestjs/common';

@Injectable()
export class NoteService {
  hello() {
    return {
      msg: '欢迎使用 note',
      data: 'hello note',
    };
  }

  getList() {
    return {
      status: 0,
      msg: 'list',
      data: ['q', 'c', 'xs', 'hh'],
    };
  }
}
