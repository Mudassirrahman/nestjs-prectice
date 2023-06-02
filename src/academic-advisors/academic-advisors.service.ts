import { Injectable } from '@nestjs/common';
import { CreateAcademicAdvisorDto } from './dto/create-academic-advisor.dto';
import { UpdateAcademicAdvisorDto } from './dto/update-academic-advisor.dto';

@Injectable()
export class AcademicAdvisorsService {
  create(createAcademicAdvisorDto: CreateAcademicAdvisorDto) {
    return 'This action adds a new academicAdvisor';
  }

  findAll() {
    return `This action returns all academicAdvisors`;
  }

  findOne(id: number) {
    return `This action returns a #${id} academicAdvisor`;
  }

  update(id: number, updateAcademicAdvisorDto: UpdateAcademicAdvisorDto) {
    return `This action updates a #${id} academicAdvisor`;
  }

  remove(id: number) {
    return `This action removes a #${id} academicAdvisor`;
  }
}
