import { Injectable } from '@nestjs/common';
import {AbstractMethodGoingToFill} from "./abstractChileClass.service"


//

@Injectable()
export abstract class BuyItems{
  abstract buyItemsToday();
 buyItems(){
   console.log("buy milk");
   console.log("buy eggs");
   this.buyItemsToday();
 }
}

@Injectable()
export class DayOne extends BuyItems{

 buyItemsToday() {
   console.log("buy bread");
   console.log("buy yogurt");
   
 }
}


@Injectable()
export class DayTwo extends BuyItems{

 buyItemsToday() {
   console.log("buy oil");
   console.log("buy patato");
   
 }
}
//
@Injectable()
export class AppService {
  constructor(
    // private readonly dayOne : DayOne ,
    //  private readonly dayTwo: DayTwo ,
      private readonly abstractMethodGoingToFill : AbstractMethodGoingToFill)
  {}
  getItemlist() {

  // this.dayOne.buyItems();
  // this.dayTwo.buyItems();
  this.abstractMethodGoingToFill.checkEveryTime();

}
}

