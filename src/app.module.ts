import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService, DayOne, DayTwo } from './app.service';
import { AbstractMethodGoingToFill } from './abstractChildClass.service';
import { Abstract2MethodGoingToFill } from './abstract2ChildClass.service';
import { SellerModule } from './seller/seller.module';
import { CustomerModule } from './customer/customer.module';
import { ShopModule } from './shop/shop.module';
import { AcademicAdvisorsModule } from './academic-advisors/academic-advisors.module';
import { TeacherAssistentsModule } from './teacher-assistents/teacher-assistents.module';
import { StudentsModule } from './students/students.module';
import { TeachersModule } from './teachers/teachers.module';
import { SchoolModule } from './school/school.module';
import { UserModule } from './user/user.module';
import { AdminModule } from './admin/admin.module';


@Module({
  imports: [AdminModule, UserModule, SchoolModule, TeachersModule, StudentsModule, TeacherAssistentsModule, AcademicAdvisorsModule, ShopModule, CustomerModule, SellerModule],
  controllers: [AppController],
  providers: [AppService, DayOne , DayTwo, AbstractMethodGoingToFill , Abstract2MethodGoingToFill],
})
export class AppModule {}
