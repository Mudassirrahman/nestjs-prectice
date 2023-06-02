import { Test, TestingModule } from '@nestjs/testing';
import { TeacherAssistentsService } from './teacher-assistents.service';

describe('TeacherAssistentsService', () => {
  let service: TeacherAssistentsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TeacherAssistentsService],
    }).compile();

    service = module.get<TeacherAssistentsService>(TeacherAssistentsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
