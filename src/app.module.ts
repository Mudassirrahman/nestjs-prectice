import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService, DayOne, DayTwo } from './app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, DayOne , DayTwo],
})
export class AppModule {}
