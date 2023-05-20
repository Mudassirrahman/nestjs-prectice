import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService, DayOne, DayTwo } from './app.service';
import { AbstractMethodGoingToFill } from './abstractChildClass.service';
import { Abstract2MethodGoingToFill } from './abstract2ChildClass.service';


@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, DayOne , DayTwo, AbstractMethodGoingToFill , Abstract2MethodGoingToFill],
})
export class AppModule {}
