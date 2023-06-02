import { Injectable } from '@nestjs/common';
import { CreateTeacherAssistentDto } from './dto/create-teacher-assistent.dto';
import { UpdateTeacherAssistentDto } from './dto/update-teacher-assistent.dto';

@Injectable()
export class TeacherAssistentsService {
  create(createTeacherAssistentDto: CreateTeacherAssistentDto) {
    return 'This action adds a new teacherAssistent';
  }

  findAll() {
    return `This action returns all teacherAssistents`;
  }

  findOne(id: number) {
    return `This action returns a #${id} teacherAssistent`;
  }

  update(id: number, updateTeacherAssistentDto: UpdateTeacherAssistentDto) {
    return `This action updates a #${id} teacherAssistent`;
  }

  remove(id: number) {
    return `This action removes a #${id} teacherAssistent`;
  }
}
