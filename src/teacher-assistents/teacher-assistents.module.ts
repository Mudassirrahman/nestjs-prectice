import { Module } from '@nestjs/common';
import { TeacherAssistentsService } from './teacher-assistents.service';
import { TeacherAssistentsController } from './teacher-assistents.controller';

@Module({
  controllers: [TeacherAssistentsController],
  providers: [TeacherAssistentsService]
})
export class TeacherAssistentsModule {}
