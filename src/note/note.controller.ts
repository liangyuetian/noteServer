import { Controller, Get, LoggerService } from '@nestjs/common';
import { NoteService } from './note.service';

@Controller('note')
export class NoteController {
  constructor(
    private noteService: NoteService,
    private loggerService: LoggerService,
  ) {}

  @Get()
  hello() {
    this.loggerService.log('visit api /note/hello');
    return this.noteService.hello();
  }

  @Get('list')
  getList() {
    this.loggerService.log('visit api /note/list');
    return this.noteService.getList();
  }
}
