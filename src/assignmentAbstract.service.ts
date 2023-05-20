import { Injectable } from '@nestjs/common';


@Injectable ()
export abstract class CheckThingsBeforeBikeRiding {

   protected abstract checkday1();
   protected abstract checkday2();

    checkEveryTime(){
        console.log("data from normal method");
        console.log("wear helmet");
        console.log("check brakes");
        console.log("check indicators");
        this.checkday1()
        this.checkday2()
          
    }
}
