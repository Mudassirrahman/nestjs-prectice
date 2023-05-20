import { CheckThingsBeforeBikeRiding } from './assignmentAbstract.service';



export class Abstract2MethodGoingToFill extends CheckThingsBeforeBikeRiding{
    protected checkday2() {
        console.log("data from abstract class2 method");
        console.log("carry id card");
        console.log("carry liscenc")

    }
    protected checkday1() {}

}