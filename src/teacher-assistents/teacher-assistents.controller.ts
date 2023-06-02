import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TeacherAssistentsService } from './teacher-assistents.service';
import { CreateTeacherAssistentDto } from './dto/create-teacher-assistent.dto';
import { UpdateTeacherAssistentDto } from './dto/update-teacher-assistent.dto';

@Controller('teacher-assistents')
export class TeacherAssistentsController {
  constructor(private readonly teacherAssistentsService: TeacherAssistentsService) {}

  @Post()
  create(@Body() createTeacherAssistentDto: CreateTeacherAssistentDto) {
    return this.teacherAssistentsService.create(createTeacherAssistentDto);
  }

  @Get()
  findAll() {
    return this.teacherAssistentsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.teacherAssistentsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTeacherAssistentDto: UpdateTeacherAssistentDto) {
    return this.teacherAssistentsService.update(+id, updateTeacherAssistentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.teacherAssistentsService.remove(+id);
  }
}
