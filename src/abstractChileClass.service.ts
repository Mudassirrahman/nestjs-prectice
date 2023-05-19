import { CheckThingsBeforeBikeRiding } from './assignmentAbstract.service';



export class AbstractMethodGoingToFill extends CheckThingsBeforeBikeRiding{
    protected checkToday() {
        console.log("data from abstract method");
        console.log("check fuel tank");
        console.log("check mobil Oil")

    }

}