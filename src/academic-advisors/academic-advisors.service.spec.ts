import { Test, TestingModule } from '@nestjs/testing';
import { AcademicAdvisorsService } from './academic-advisors.service';

describe('AcademicAdvisorsService', () => {
  let service: AcademicAdvisorsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AcademicAdvisorsService],
    }).compile();

    service = module.get<AcademicAdvisorsService>(AcademicAdvisorsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
