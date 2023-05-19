import { Injectable } from '@nestjs/common';


@Injectable ()
export abstract class CheckThingsBeforeBikeRiding {

   protected abstract checkToday();

    checkEveryTime(){
        console.log("data from normal method");
        console.log("wear helmet");
        console.log("check brakes");
        console.log("check indicators");
        this.checkToday()
        
        
    }
}
