import { PartialType } from '@nestjs/mapped-types';
import { CreateAcademicAdvisorDto } from './create-academic-advisor.dto';

export class UpdateAcademicAdvisorDto extends PartialType(CreateAcademicAdvisorDto) {}
