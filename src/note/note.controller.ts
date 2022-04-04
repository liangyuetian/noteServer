import { Controller, Get } from '@nestjs/common';
import { NoteService } from './note.service';

@Controller('note')
export class NoteController {
  constructor(private noteService: NoteService) {}

  @Get()
  hello() {
    return this.noteService.hello();
  }

  @Get('list')
  getList() {
    return this.noteService.getList();
  }
}
