import { CheckThingsBeforeBikeRiding } from './assignmentAbstract.service';



export class AbstractMethodGoingToFill extends CheckThingsBeforeBikeRiding{
    protected checkday1() {
        console.log("data from abstract class1 method");
        console.log("check fuel tank");
        console.log("check mobil Oil")

    }
    protected checkday2() {}
        
    

}