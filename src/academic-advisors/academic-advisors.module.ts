import { Module } from '@nestjs/common';
import { AcademicAdvisorsService } from './academic-advisors.service';
import { AcademicAdvisorsController } from './academic-advisors.controller';

@Module({
  controllers: [AcademicAdvisorsController],
  providers: [AcademicAdvisorsService]
})
export class AcademicAdvisorsModule {}
