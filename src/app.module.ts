import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { NoteModule } from './note/note.module';

@Module({
  imports: [CatsModule, NoteModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
