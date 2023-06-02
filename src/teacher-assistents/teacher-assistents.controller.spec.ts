import { Test, TestingModule } from '@nestjs/testing';
import { TeacherAssistentsController } from './teacher-assistents.controller';
import { TeacherAssistentsService } from './teacher-assistents.service';

describe('TeacherAssistentsController', () => {
  let controller: TeacherAssistentsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TeacherAssistentsController],
      providers: [TeacherAssistentsService],
    }).compile();

    controller = module.get<TeacherAssistentsController>(TeacherAssistentsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
