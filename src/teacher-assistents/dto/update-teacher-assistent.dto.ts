import { PartialType } from '@nestjs/mapped-types';
import { CreateTeacherAssistentDto } from './create-teacher-assistent.dto';

export class UpdateTeacherAssistentDto extends PartialType(CreateTeacherAssistentDto) {}
