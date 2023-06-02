import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AcademicAdvisorsService } from './academic-advisors.service';
import { CreateAcademicAdvisorDto } from './dto/create-academic-advisor.dto';
import { UpdateAcademicAdvisorDto } from './dto/update-academic-advisor.dto';

@Controller('academic-advisors')
export class AcademicAdvisorsController {
  constructor(private readonly academicAdvisorsService: AcademicAdvisorsService) {}

  @Post()
  create(@Body() createAcademicAdvisorDto: CreateAcademicAdvisorDto) {
    return this.academicAdvisorsService.create(createAcademicAdvisorDto);
  }

  @Get()
  findAll() {
    return this.academicAdvisorsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.academicAdvisorsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAcademicAdvisorDto: UpdateAcademicAdvisorDto) {
    return this.academicAdvisorsService.update(+id, updateAcademicAdvisorDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.academicAdvisorsService.remove(+id);
  }
}
