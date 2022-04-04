import { Controller, Get, ConsoleLogger } from '@nestjs/common';
import { NoteService } from './note.service';

@Controller('note')
export class NoteController {
  constructor(
    private noteService: NoteService,
    private consoleLogger: ConsoleLogger,
  ) {}

  @Get()
  hello() {
    this.consoleLogger.log('visit api /note/hello');
    return this.noteService.hello();
  }

  @Get('list')
  getList() {
    this.consoleLogger.log('visit api /note/list');
    return this.noteService.getList();
  }
}
