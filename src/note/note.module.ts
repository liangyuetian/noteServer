import { ConsoleLogger, Logger, Module } from '@nestjs/common';
import { NoteController } from './note.controller';
import { NoteService } from './note.service';

@Module({
  imports: [Logger],
  controllers: [NoteController],
  providers: [NoteService, ConsoleLogger],
})
export class NoteModule {}
