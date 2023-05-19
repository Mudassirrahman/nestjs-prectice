import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService, DayOne, DayTwo } from './app.service';
import { AbstractMethodGoingToFill } from './abstractChileClass.service';


@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, DayOne , DayTwo, AbstractMethodGoingToFill],
})
export class AppModule {}
