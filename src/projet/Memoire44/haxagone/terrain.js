import { CaseGenerique, test2, test3, test6 } from "../divers/Generique";



export class Mountain extends CaseGenerique {
    constructor(orientation){
        super(`images/Memoire44/terrain/h_mountain.webp`, 1, {Soldat:-2,Tank:-2}, true, false, true, false, false, false, "darker brightness-[0.60] ");
    }
}

export class RoadRight extends CaseGenerique {
    constructor(orientation){
        super(test3("terrain","h_road",orientation), 3, false, false, false, false, false, false, false, "darker");
    }
}
export class RoadCurve extends CaseGenerique {
    constructor(orientation){
        super(test6("terrain","h_roadcurve",orientation), 6, false, false, false, false, false, false, false, "darker");
    }
}
export class RoadHillRight extends CaseGenerique {
    constructor(orientation){
        super(test3("terrain","h_hillroad",orientation), 3, false, false, false, false, false, false, false, "darker");
    }
}
export class RoadHillCurve extends CaseGenerique {
    constructor(orientation){
        super(test6("terrain","h_hillcurve",orientation), 6, false, false, false, false, false, false, false, "darker");
    }
}
export class RoadBranchLeft extends CaseGenerique {
    constructor(orientation){
        super(test6("terrain","h_roadFL",orientation), 6, false, false, false, false, false, false, false, "darker");
    }
}
export class RoadBranchRight extends CaseGenerique {
    constructor(orientation){
        super(test6("terrain","h_roadFR",orientation), 6, false, false, false, false, false, false, false, "darker");
    }
}
export class RoadX extends CaseGenerique {
    constructor(orientation){
        super(test3("terrain","h_roadX",orientation), 3, false, false, false, false, false, false, false, "darker");
    }
}
export class RoadY extends CaseGenerique {
    constructor(orientation){
        super(test2("terrain","h_roadY",orientation), 2, false, false, false, false, false, false, false, "darker");
    }
}
export class RiverBranchLeft extends CaseGenerique {
    constructor(orientation){
        super(test6("terrain","h_riverFL",orientation), 6, false, false, false, false, false, false, false, " brightness-[0.65] contrast-[1.7] saturate-[1.4] ");
    }
}
export class RiverBranchRight extends CaseGenerique {
    constructor(orientation){
        super(test6("terrain","h_riverFR",orientation), 6, false, false, false, false, false, false, false, " brightness-[0.65] contrast-[1.7] saturate-[1.4] ");
    }
}
export class RiverY extends CaseGenerique {
    constructor(orientation){
        super(test2("terrain","h_riverY",orientation), 2, false, false, false, false, false, false, false, " brightness-[0.65] contrast-[1.7] saturate-[1.4] ");
    }
}
export class AirField extends CaseGenerique {
    constructor(orientation){
        super(test3("terrain","h_airfield",orientation), 3, false, false, false, false, false, false, false, "brightness-[0.7] ");
    }
}
export class AirFieldX extends CaseGenerique {
    constructor(orientation){
        super(test3("terrain","h_airfieldX",orientation), 3, false, false, false, false, false, false, false, "brightness-[0.7] ");
    }
}
export class Church extends CaseGenerique {
    constructor(){
        super(`images/Memoire44/terrain/h_church.webp`, 1, false, false, false, false, false, false, false, "brightness-[0.7] ");
    }
}
export class Barracks extends CaseGenerique {
    constructor(){
        super(`images/Memoire44/terrain/h_barracks.webp`, 1, false, false, false, false, false, false, false, "brightness-[0.7] ");
    }
}
export class Camp extends CaseGenerique {
    constructor(){
        super(`images/Memoire44/terrain/h_camp.webp`, 1, false, false, false, false, false, false, false, "brightness-[0.7] ");
    }
}
export class Cemetery extends CaseGenerique {
    constructor(){
        super(`images/Memoire44/terrain/h_cemetery.webp`, 1, false, false, false, false, false, false, false, "brightness-[0.7] ");
    }
}
export class Dam extends CaseGenerique {
    constructor(orientation){
        super(test6('terrain',"h_dam",orientation), 6, false, false, false, false, false, false, false, " brightness-[0.65] contrast-[1.7] saturate-[1.4] ");
    }
}
export class LakeA extends CaseGenerique {
    constructor(orientation){
        super(test6('terrain',"h_lakeA",orientation), 6, false, false, false, false, false, false, false, " brightness-[0.65] contrast-[1.7] saturate-[1.4] ");
    }
}
export class LakeB extends CaseGenerique {
    constructor(orientation){
        super(test6('terrain',"h_lakeB",orientation), 6, false, false, false, false, false, false, false, " brightness-[0.65] contrast-[1.7] saturate-[1.4] ");
    }
}
export class LakeC extends CaseGenerique {
    constructor(orientation){
        super(test6('terrain',"h_lakeC",orientation), 6, false, false, false, false, false, false, false, " brightness-[0.65] contrast-[1.7] saturate-[1.4] ");
    }
}
export class Pond extends CaseGenerique {
    constructor(orientation){
        super(test6('terrain',"h_pond",orientation), 6, false, false, false, false, false, false, false, " brightness-[0.65] contrast-[1.7] saturate-[1.4] ");
    }
}
export class Depot extends CaseGenerique {
    constructor(){
        super(`images/Memoire44/terrain/h_depot.webp`, 1, false, false, false, false, false, false, false, "brightness-[0.7] ");
    }
}
export class Factory extends CaseGenerique {
    constructor(){
        super(`images/Memoire44/terrain/h_factory.webp`, 1, false, false, false, false, false, false, false, "brightness-[0.7] ");
    }
}
export class Fortress extends CaseGenerique {
    constructor(){
        super(`images/Memoire44/terrain/h_fortress.webp`, 1, false, false, false, false, false, false, false, "brightness-[0.7] ");
    }
}
export class LightHouse extends CaseGenerique {
    constructor(){
        super(`images/Memoire44/terrain/h_lighthouse.webp`, 1, false, false, false, false, false, false, false, "brightness-[0.7] ");
    }
}
export class Marshes extends CaseGenerique {
    constructor(){
        super(`images/Memoire44/terrain/h_marshes.webp`, 1, false, false, false, false, false, false, false, "brightness-[0.7] ");
    }
}
export class TrainRight extends CaseGenerique {
    constructor(orientation){
        super(test3("terrain","h_rail",orientation), 3, false, false, false, false, false, false, false, "brightness-[0.7] ");
    }
}
export class TrainCurve extends CaseGenerique {
    constructor(orientation){
        super(test6("terrain","h_railcurve",orientation), 6, false, false, false, false, false, false, false, "brightness-[0.7] ");
    }
}
export class TrainBranchLeft extends CaseGenerique {
    constructor(orientation){
        super(test6("terrain","h_railFL",orientation), 6, false, false, false, false, false, false, false, "brightness-[0.7] ");
    }
}
export class TrainBranchRight extends CaseGenerique {
    constructor(orientation){
        super(test6("terrain","h_railFR",orientation), 6, false, false, false, false, false, false, false, "brightness-[0.7] ");
    }
}
export class TrainX extends CaseGenerique {
    constructor(orientation){
        super(test3("terrain","h_railX",orientation), 3, false, false, false, false, false, false, false, "brightness-[0.7] ");
    }
}
export class TrainXRoad extends CaseGenerique {
    constructor(orientation){
        super(test3("terrain","h_railroad",orientation), 3, false, false, false, false, false, false, false, "brightness-[0.7] ");
    }
}
export class Station extends CaseGenerique {
    constructor(orientation){
        super(test3("terrain","h_station",orientation), 3, false, false, false, false, false, false, false, "brightness-[0.7] ");
    }
}
export class Pontoon extends CaseGenerique {
    constructor(orientation){
        super(test6("terrain","o_pontoon",orientation), 6, false, false, false, false, false, false, false, "brightness-[0.7] ");
    }
}
export class RailBridge extends CaseGenerique {
    constructor(orientation){
        super(test6("terrain","o_railbridge",orientation), 6, false, false, false, false, false, false, false, "");
    }
}
export class Loco extends CaseGenerique {
    constructor(orientation){
        super(test6("terrain","o_loco",orientation), 6, false, false, false, false, false, false, false, "");
    }
}
export class Wagon extends CaseGenerique {
    constructor(orientation){
        super(test6("terrain","o_wagon",orientation), 6, false, false, false, false, false, false, false, "");
    }
}
export class Ford extends CaseGenerique {
    constructor(orientation){
        super(test3("terrain","o_ford",orientation), 3, false, false, false, false, false, false, false, "");
    }
}
export class RoadBlock extends CaseGenerique {
    constructor(orientation){
        super(test3("terrain","o_roadblock",orientation), 3, false, false, false, false, false, false, false, "");
    }
}
export class Casemate extends CaseGenerique {
    constructor(){
        super(`images/Memoire44/terrain/o_casemate.webp`, 1, false, false, false, false, false, false, false, "");
    }
}
