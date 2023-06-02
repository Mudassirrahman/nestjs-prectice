import { Test, TestingModule } from '@nestjs/testing';
import { AcademicAdvisorsController } from './academic-advisors.controller';
import { AcademicAdvisorsService } from './academic-advisors.service';

describe('AcademicAdvisorsController', () => {
  let controller: AcademicAdvisorsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AcademicAdvisorsController],
      providers: [AcademicAdvisorsService],
    }).compile();

    controller = module.get<AcademicAdvisorsController>(AcademicAdvisorsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
